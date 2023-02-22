import styles from '../../styles/Home.module.css'
import CustomHtmlViewer from "../customHtmlTemplate/customHtmlViewer";
import {useState} from "react";
import InputField from "../basicComponents/InputField";
import {BlueButton, GreenButton} from "../basicComponents/CustomButtons";
import dynamic from "next/dynamic";
import Parser from "html-react-parser";
const CustomHtmlEditor = dynamic(() => import('../customHtmlTemplate/customHtmlEditor'), { ssr: false })

export default function ContentEditor({ prompts, onSave}){
    const[data, setData] = useState([]);
    const[title, setTitle] = useState("")
    const[tags, setTags] = useState("")
    let editor = null;
    return(
        <div className={styles.editorPage} >

            <div className='flex justify-center mt-5'>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96 mr-3">
                        <label htmlFor="title" className="form-label inline-block mb-2 text-gray-700">{prompts.title}</label>
                        <InputField type="text" id="title" placeholder={"Enter " + prompts.title} value={title} onChange={setTitle}/>
                    </div>
                    <div className="mb-3 xl:w-96 mr-3">
                        <label htmlFor="title" className="form-label inline-block mb-2 text-gray-700">Tags</label>
                        <InputField type="text" id="tags" placeholder="Enter Blog Tags" value={tags} onChange={setTags}/>
                    </div>
                </div>
            </div>
            <CustomHtmlEditor
                data={data}
                onEditor={e => editor = e}
            />
            <div id='editorHolder' className='bg-gray'/>
            <div id='dialog' className={styles.dialog}>
                <div className={styles.dialogContent}>
                    <div id='dialogContent' className={styles.dialogActualContent}>
                        <CustomHtmlViewer contentBlocks={data.blocks || []}/>
                    </div>
                    <BlueButton title="Hide Preview" onClick={() => {
                        document.getElementById('dialog').style['display'] = 'none';
                    }}/>
                </div>

            </div>
            <div className='flex flex-1 justify-center space-x-2'>
                <GreenButton title={prompts.saveButton} onClick={() => {
                    editor.save().then(data => {
                        setData(data)
                        let dataFormatted = {
                            title: document.getElementById('title').value,
                            tags: document.getElementById('tags').value,
                            content: {...data, blocks: clarifyContent(data.blocks)}
                        }
                        console.log(dataFormatted)
                        onSave(dataFormatted);
                    })

                }}/>
                <BlueButton title="Show Preview" onClick={() => {
                    editor.save().then(data => {
                        setData(data)
                    })
                    document.getElementById('dialog').style['display'] = 'block';
                }} />
            </div>

        </div>
    )
}

function clarifyContent(blocks) {

    return blocks.map(block => {
        switch (block.type) {
            case "header":
            case "embded":
            case "paragraph":
            case "delimiter":
            case "list":
            case "raw":
                return block;
            case "image":
                if(block.data.unsplash === undefined)
                    block.data.unsplash = "";
                return block;
            default:
                console.log("Unknown block type", block.type);
                break;
        }
    });
}
