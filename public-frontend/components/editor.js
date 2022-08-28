import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
import List from '@editorjs/list';
// import Image from '@editorjs/simple-image'
// import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image'
import Embed from '@editorjs/embed';
import InlineImage from 'editorjs-inline-image';
const RawTool = require('@editorjs/raw');
const Paragraph = require('editorjs-paragraph-with-alignment');

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

export default function Editor(props) {
    return(
        <div className='flex flex-1 justify-center space-x-2'>
            <button type="button"
                    className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => {
                        editor.save().then(data => {
                            props.onSave(data)
                        })
                    }}>
            Post</button>

            <button type="button"
                    className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => {
                        editor.save().then(data => {
                            props.onPreview(data)
                        })
                    }}>
                Show Preview</button>
        </div>
    )
}


