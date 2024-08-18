import { Response, Request } from 'express';
import { CustomError } from '../../domain';
import { FileUploadService } from '../services/file-upload.service';
import { UploadedFile } from 'express-fileupload';
import { error } from 'console';

export class FileUploadController {

  // DI
  constructor(
    private readonly fileUploadService: FileUploadService,
  ) { }

  private handleError = ( error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status( error.statusCode ).json( { error: error.message } );
    }

    console.log( `${ error }` );
    return res.status( 500 ).json( { error: 'Internal server error' } );
  };

  uploadFile = (req: Request, res: Response) => {

    const type = req.params.type;
    const validTypes = ['users', 'products', 'categories'];

    if (!validTypes.includes(type)) {
      return res.status(400).json({ error: `Invalid type: ${ type }, valid ones ${ validTypes }` });
    }

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'No files were selected' });
    }

    const file = req.files.file as UploadedFile;

    this.fileUploadService.uploadSingle(file, `uploads/${ type }`)
        .then(uploaded => res.json(uploaded))
        .catch(error => this.handleError( error, res ));

  };
  
  uploadMultileFiles = (req: Request, res: Response) => {

    const type = req.params.type;
    // const files = req.body.files as UploadedFile[];

    
    // this.fileUploadService.uploadMultiple( files, `uploads/${ type }` )
    //   .then( uploaded => res.json(uploaded) )
    //   .catch(  error => this.handleError( error, res ) )

    res.json('uploadMultipleFile');

  };

}