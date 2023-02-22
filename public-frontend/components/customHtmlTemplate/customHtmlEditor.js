import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
import List from '@editorjs/list';
import InlineImage from 'editorjs-inline-image';
const RawTool = require('@editorjs/raw');
import Table from '@editorjs/table';
const Paragraph = require('editorjs-paragraph-with-alignment');
import Quote from '@editorjs/quote';
const LinkTool = require('@editorjs/link');
const Delimiter = require('@editorjs/delimiter');
const CodeTool = require('@editorjs/code');

import styles from '../../styles/Home.module.css'

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
                unsplash:{
                    appName: 'Portfolio Website',
                    clientId: 'za5eB4XR4uyOZDGTF3CD1Kcp8xlC96gKFs4tBo1BoXY'
                }
            }
        },
        table: {
            class: Table,
            inlineToolbar: true,
            config: {
                rows: 2,
                cols: 3,
            },
        },
        raw: RawTool,
        list: {
            class: List,
            inlineToolbar: true,
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
            },
        },
        delimiter: Delimiter,
        code:CodeTool
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
        <div className={styles.editorHolder}>
            <div id='editorHolder' className='bg-gray'/>
        </div>
    )
}


