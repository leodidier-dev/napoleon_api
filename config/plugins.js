module.exports = ({ env }) =>  ({
    'navigation': { enabled: false },
    'graphql': { enabled: true },
    'ckeditor': {
        enabled: true,
        config:{
           editor:{
            toolbar: {
               items: [
                 'paragraph',
                 'heading1',
                 'heading2',
                 'heading3',
                 '|',
                 'bold',
                 'italic',
                 'underline',
                 'strikethrough',
                 '|',
                 'bulletedList',
                 'numberedList',
                 '|',
                 'StrapiMediaLib',
                 'insertTable',
                 'blockQuote',
                 'link',
                 '|',
                 "fullScreen",
                 'undo',
                 'redo'
               ]
             },
             image: {
               toolbar: [
                 'toggleImageCaption',
                 'imageTextAlternative'
               ]
             },
             // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
             table: {
               contentToolbar: [
                 'tableColumn',
                 'tableRow',
                 'mergeTableCells',
                 'tableCellProperties',
                 'tableProperties',
                 'toggleTableCaption'
               ]
             },
           }
         }
       },

       upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },


});