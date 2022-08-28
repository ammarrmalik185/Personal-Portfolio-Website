import dynamic from 'next/dynamic'
import styles from '../../styles/Home.module.css'
import axios from "../../services/axiosService";
import { useRouter } from "next/router";
const EditorComponent = dynamic(() => import('../../components/editor'), { ssr: false })

export default function Editor(){
    const router = useRouter();
    return(
        <div className={styles.editorPage} >
            <h1 className={styles.title}>Create Your Blog</h1>
            <div className='flex justify-center mt-5'>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96 mr-3">
                        <label htmlFor="blogTitle" className="form-label inline-block mb-2 text-gray-700">Blog Title</label>
                        <input type="text" className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="blogTitle"
                            placeholder="Enter Blog Title"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96 ml-3">
                        <label htmlFor="blogAuthor" className="form-label inline-block mb-2 text-gray-700">Author Name</label>
                        <input type="text" className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="blogAuthor"
                               placeholder="Enter Author Name"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96 ml-3">
                        <label htmlFor="blogImage" className="form-label inline-block mb-2 text-gray-700">Image Url</label>
                        <input type="text" className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="blogImage"
                               placeholder="Enter Image Url"
                        />
                    </div>
                </div>
            </div>
            <EditorComponent
                onSave={(data) => {
                    let uploadData = {
                        blogTitle: document.getElementById('blogTitle').value,
                        blogAuthor: document.getElementById('blogAuthor').value,
                        blogContent: data
                    }
                    axios.post('/blog', uploadData).then(() => {
                        router.push("/blogs")
                    })
                    console.log(uploadData)
                }}
                onPreview={(data) => {
                    console.log(data)
                    document.getElementById('dialogContent').innerHTML = convertDataToHtml(data.blocks)
                    document.getElementById('dialog').style['display'] = 'block';
                }}
            />
            <div id='editorHolder' className='bg-gray'/>
            <div id='dialog' className={styles.dialog}>
                <div className={styles.dialogContent}>
                    <div id='dialogContent' className={styles.dialogActualContent}/>
                    <button type="button"
                            className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => {
                                document.getElementById('dialog').style['display'] = 'none';
                            }}> Hide Preview</button>
                </div>

            </div>
        </div>
    )
}

function convertDataToHtml(blocks) {
    let convertedHtml = "";
    blocks.map(block => {
        switch (block.type) {
            case "header":
                convertedHtml += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
                break;
            case "embded":
                convertedHtml += `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
                break;
            case "paragraph":
                convertedHtml += `<p style="text-align: ${block.data.alignment}">${block.data.text}</p>`;
                break;
            case "delimiter":
                convertedHtml += "<hr />";
                break;
            case "image":
                convertedHtml += `<div style="display: flex; class="${block.data.withBackground ? 'inline-image__picture--withBackground': ''}" justify-content: center"><img style="text-align: center; width: 100%; object-fit: cover; " class="img-fluid" src="${block.data.url}" title="${block.data.caption}"  alt="image"/></div><p style="text-align: center">${block.data.caption}</p>`;
                break;
            case "list":
                if (block.data.style === "unordered") {
                    convertedHtml += "<ul class='cdx-list__item cdx-list--unordered'>";
                    block.data.items.forEach(function (li) {
                        convertedHtml += `<li>${li}</li>`;
                    });
                    convertedHtml += "</ul>";
                }else if(block.data.style === "ordered"){
                    convertedHtml += "<ol class='cdx-list__item cdx-list--ordered'>";
                    block.data.items.forEach(function (li) {
                        convertedHtml += `<li>${li}</li>`;
                    });
                    convertedHtml += "</ol>";
                }
                break;
            case "raw":
                convertedHtml += block.data.html;
                break;
            default:
                console.log("Unknown block type", block.type);
                break;
        }
    });
    return convertedHtml;
}
