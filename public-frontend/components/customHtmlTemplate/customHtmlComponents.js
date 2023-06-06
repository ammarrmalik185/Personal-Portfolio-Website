import styles from "../../styles/Home.module.css";
import Parser from "html-react-parser";

export const CustomHtmlHeader = ({block}) => {
    switch (block.data.level) {
        case 1:
            return (
                <h1 className={styles.customHtmlHeading} style={{margin: 10}}>{block.data.text}</h1>
            )
        case 2:
            return (
                <h2 className={styles.customHtmlHeading} style={{margin: 10}}>{block.data.text}</h2>
            )
        case 3:
            return (
                <h3 className={styles.customHtmlHeading} style={{margin: 10}}>{block.data.text}</h3>
            )
        case 4:
            return (
                <h4 className={styles.customHtmlHeading} style={{margin: 10}}>{block.data.text}</h4>
            )
        case 5:
            return (
                <h5 className={styles.customHtmlHeading} style={{margin: 10}}>{block.data.text}</h5>
            )
        case 6:
            return (
                <h6 className={styles.customHtmlHeading} style={{margin: 10}}>{block.data.text}</h6>
            )
        default:
            return (
                <h1 className={styles.customHtmlHeading} style={{margin: 10}}>{block.data.text}</h1>
            )
    }
}

export const CustomHtmlParagraph = ({block}) => {
    return (
        <p className={styles.customHtmlParagraph} style={{textAlign: block.data.alignment, margin: 10}}>{block.data.text}</p>
    )
}

export const CustomHtmlDelimiter = ({block}) => {
    return (
        <div>
            <hr/>
            <p className={styles.customHtmlDelimiterStars}>* * *</p>
            <hr/>
        </div>
    )
}

export const CustomHtmlList = ({block}) => {
    if (block.data.style === "unordered") {
        return (
            <ul className={styles.customHtmlUnorderedList}>
                {
                    block.data.items.map(li => <li className={styles.customHtmlUnorderedListItem}>{li}</li>)
                }
            </ul>
        );

    } else if (block.data.style === "ordered") {
        return (
            <ol className={styles.customHtmlUnorderedList}>
                {
                    block.data.items.map((li, i) => <li className={styles.customHtmlUnorderedListItem}>{i+1 + ": " + li}</li>)
                }
            </ol>
        );
    }
}

export const CustomHtmlImage = ({block}) => {
    return (
        <div>   
            <div style={{display: "flex", justifyContent: "center"}}>
                <img className={styles.customHtmlImage} src={block.data.url} title={block.data.caption}  alt="image"/>
            </div>
            <p className={styles.customHtmlImageCaption} style={{textAlign: "center"}}>{block.data.caption}</p>
        </div>
    )
}

export const CustomHtmlRaw = ({block}) => {
    return (
        <div className={styles.customHtmlRawHtml}>{Parser(block.data.html)}</div>
    )
}

export const CustomHtmlCode = ({block}) => {
    let stringParsed = block.data.code.replace(/\n/g, "<br>");
    return <p className={styles.customHtmlCode}>{stringParsed}</p>
}

export const CustomHtmlTable = ({block}) => {
    let headerAdd = block.data.withHeadings;

    return (
        <table className={styles.customHtmlTable}>
            {
                block.data.content.map(col => {
                    if(headerAdd){
                        headerAdd = false;
                        return (
                            <thead className={styles.customHtmlTableHeader}>
                                {
                                    col.row.map(row => <th className={styles.customHtmlTableHeader}>{row}</th>)
                                }
                            </thead>
                        )
                    }else{
                        return (
                            <tr className={styles.customHtmlTableRow}>
                                {
                                    col.row.map(row => <td className={styles.customHtmlTableData}>{row}</td>)
                                }
                            </tr>
                        )
                    }
                })
            }
        </table>
    )
}

export const CustomHtmlQuote = ({block}) => {
    return (
        <blockquote className={styles.customHtmlBlockquote}>
            <p style={{textAlign: block.data.alignment}}>{block.data.text}</p>
            <footer className={styles.customHtmlBlockquoteFooter}>Author: <cite>{block.data.caption}</cite></footer>
        </blockquote>
    )
}
