import styles from '../../styles/Home.module.css'
import Parser from 'html-react-parser';

export default function CustomHtmlViewer({ contentBlocks }) {

    return (
        <div>
            <section className='block'>
                <div id="contentDisplay" className={"space-y-4"}>{Parser(convertDataToHtml(contentBlocks))}</div>
            </section>
        </div>
    )
}

function convertDataToHtml(blocks) {
    let convertedHtml = "";
    blocks.map(block => {
        switch (block.type) {
            case "header":
                convertedHtml += `<h${block.data.level} className=${styles.customHtmlHeading} style="margin: 10px">${block.data.text}</h${block.data.level}>`;
                break;
            case "paragraph":
                convertedHtml += `<p className=${styles.customHtmlParagraph} style="text-align: ${block.data.alignment}; margin: 10px">${block.data.text}</p>`;
                break;
            case "delimiter":
                convertedHtml += `<hr /><p className=${styles.customHtmlDelimiterStars}>* * *</p><hr/>`;
                break;
            case "list":
                if (block.data.style === "unordered") {
                    convertedHtml += `<ul className=${styles.customHtmlUnorderedList}>`;
                    block.data.items.forEach(function (li) {
                        convertedHtml += `<li className=${styles.customHtmlUnorderedListItem}>${li}</li>`;
                    });
                    convertedHtml += "</ul>";
                } else if (block.data.style === "ordered") {
                    convertedHtml += `<ol className=${styles.customHtmlUnorderedList}>`;
                    block.data.items.forEach(function (li, i) {
                        convertedHtml += `<li className=${styles.customHtmlUnorderedListItem}>${i+1 + ": " + li}</li>`;
                    });
                    convertedHtml += "</ol>";
                }
                break;
            case "image":
                convertedHtml += `<div style="display: flex; class="${block.data.withBackground ? 'inline-image__picture--withBackground' : ''}" justify-content: center">
                                        <img className=${styles.customHtmlImage} src="${block.data.url}" title="${block.data.caption}"  alt="image"/>
                                    </div>
                                    <p className=${styles.customHtmlImageCaption} style="text-align: center">${block.data.caption}</p>`;
                break;
            case "raw":
                convertedHtml += `<div className=${styles.customHtmlRawHtml}>${block.data.html}</div>`;
                break;
            case "code":
                let stringParsed = block.data.code.replace(/\n/g, "<br>");
                convertedHtml += `<p className=${styles.customHtmlCode}>${stringParsed}</p>`
                break;
            case "table":
                convertedHtml += `<table className=${styles.customHtmlTable}>`
                let headerAdd = true;
                block.data.content.forEach(col => {
                    if(headerAdd){
                        convertedHtml += `<thead className=${styles.customHtmlTableHeader}>`
                        col.row.forEach(row => convertedHtml += `<th className=${styles.customHtmlTableHeader}>${row}</th>`)
                        convertedHtml += `</thead>`
                        headerAdd = false;
                    }else{
                        convertedHtml += `<tr className=${styles.customHtmlTableRow}>`
                        col.row.forEach(row => convertedHtml += `<td className=${styles.customHtmlTableData}>${row}</td>`)
                        convertedHtml += `</tr>`
                    }

                })
                break;
            case "quote":
                convertedHtml += `
                <blockquote className=${styles.customHtmlBlockquote}>
                    <p style="text-align: ${block.data.alignment}">${block.data.text}</p>
                    <footer  className=${styles.customHtmlBlockquoteFooter}>Author: <cite>${block.data.caption}</cite></footer>
                </blockquote>`
                break;
            default:
                console.log("Unknown block type", block.type);
                break;
        }
    });
    return convertedHtml;
}
