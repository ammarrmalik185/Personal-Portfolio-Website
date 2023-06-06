import EditorJS from '@editorjs/editorjs';
const { EditorConfig } = require('./customHTMLConfig');

import styles from '../../styles/Home.module.css'

let editor;
let init = false;
function InitEditor(blocks){
    if(init) return;
    editor =  new EditorJS({...EditorConfig, data: {blocks: blocks}});
    init = true;
}

export default function CustomHtmlEditor({ data , onEditor, isUpdate }) {
    if(isUpdate){
        if(data.blocks){
            console.log(data.blocks)
            InitEditor(data.blocks);
            onEditor(editor);
        }
    }else{
        InitEditor([
            {
                type: "paragraph",
                data:{
                    text: "Start Writing"
                }
            }
        ])
        onEditor(editor);
    }
    return(
        <div className={styles.editorHolder}>
            <div id='editorHolder' className='bg-gray'/>
        </div>
    )
}


