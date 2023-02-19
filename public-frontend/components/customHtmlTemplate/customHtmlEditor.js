import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import InlineImage from 'editorjs-inline-image';
const RawTool = require('@editorjs/raw');
const Paragraph = require('editorjs-paragraph-with-alignment');

// import Image from '@editorjs/simple-image'
// import Quote from '@editorjs/quote';
// import SimpleImage from '@editorjs/simple-image'

const editor = new EditorJS({
    holder: 'editorHolder',
    tools: {
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        header: {
            class: Header,
            config: {
                placeholder: 'Header'
            },
            shortcut: 'CMD+SHIFT+H'
        },
        image: {
            class: InlineImage,
            inlineToolbar: true,
            config: {
                embed: {
                    display: true,
                },
                unsplash: {
                    appName: 'Glass Polymorphism',
                    clientId: 'RJzPnUYptbBz3VALcb6IFHCrORoTWqA3Mg8cUoDqQuc'
                }
            }
        },
        raw: RawTool,
        list: {
            class: List,
            inlineToolbar: true,
        },
        embded: {
            class: Embed
        },
        // quote: {
        //     class: Quote,
        //     inlineToolbar: true,
        //     shortcut: 'CMD+SHIFT+O',
        //     config: {
        //         quotePlaceholder: 'Enter a quote',
        //         captionPlaceholder: 'Quote\'s author',
        //     },
        // },

    },
    data:{
        blocks:[
            {
                type: "paragraph",
                data:{
                    text: "Start Writing your blog"
                }
            }
        ]
    }
});

export default function CustomHtmlEditor({ data , onEditor }) {
    if(data !== undefined){
        editor.blocks = data;
    }
    onEditor(editor);
    return(
        <div className='flex flex-1 justify-center space-x-2'>
            <div id='editorHolder' className='bg-gray'/>
        </div>
    )
}


