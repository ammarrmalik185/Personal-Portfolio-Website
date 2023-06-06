let Paragraph;
let Header;
let Delimiter;
let CodeTool;
let Table;
let RawTool;
let List;
let InlineImage;
let Quote;


if (typeof window !== 'undefined') {
    Paragraph = require("editorjs-paragraph-with-alignment");
    Header = require("@editorjs/header");
    Delimiter = require("@editorjs/delimiter");
    CodeTool = require("@editorjs/code");
    Table = require("@editorjs/table");
    RawTool = require("@editorjs/raw");
    List = require("@editorjs/list");
    InlineImage = require("editorjs-inline-image");
    Quote = require("@editorjs/quote");
}

const staticData = require("../../staticData.json");
const {CustomHtmlParagraph, CustomHtmlHeader, CustomHtmlDelimiter, CustomHtmlCode, CustomHtmlTable, CustomHtmlRaw,
    CustomHtmlList, CustomHtmlImage, CustomHtmlQuote} = require("./customHtmlComponents");
const styles = require("../../styles/Home.module.css");

const customHTMLMapping = {
    paragraph: {
        tool: Paragraph,
        viewer: CustomHtmlParagraph,
    },
    header: {
        tool: Header,
        viewer: CustomHtmlHeader,
    },
    delimiter: {
        tool: Delimiter,
        viewer: CustomHtmlDelimiter,
    },
    code: {
        tool: CodeTool,
        viewer: CustomHtmlCode,
    },
    table: {
        tool: Table,
        viewer: CustomHtmlTable,
    },
    raw: {
        tool: RawTool,
        viewer: CustomHtmlRaw,
    },
    list: {
        tool: List,
        viewer: CustomHtmlList,
    },
    image: {
        tool: InlineImage,
        viewer: CustomHtmlImage,
    },
    quote: {
        tool: Quote,
        viewer: CustomHtmlQuote,
    }
}

const editorConfig = {
    holder: 'editorHolder',
    data:{ blocks: [] },
    tools: { }
};
const viewerConfig = {
    elements: {},
    AutoRenderer
};

for (const [key, value] of Object.entries(customHTMLMapping)) {
    if (staticData.editorConfig.tools[key] !== undefined && staticData.editorConfig.tools[key].enabled === true) {
        editorConfig.tools[key] = {
            class: value.tool,
            ...staticData.editorConfig.tools[key].editorConfig,
        };
        viewerConfig.elements[key] = {
            class: value.viewer
        };
    }
}

function AutoRenderer(block) {
    switch (block.type) {
        case "header": return <CustomHtmlHeader key={block.id} block={block} />;
        case "paragraph": return <CustomHtmlParagraph key={block.id} block={block} />;
        case "delimiter": return <CustomHtmlDelimiter key={block.id} block={block} />;
        case "list": return <CustomHtmlList key={block.id} block={block} />;
        case "image": return <CustomHtmlImage key={block.id} block={block} />;
        case "raw": return <CustomHtmlRaw key={block.id} block={block} />;
        case "code": return <CustomHtmlCode key={block.id} block={block} />;
        case "table": return <CustomHtmlTable key={block.id} block={block} />;
        case "quote": return <CustomHtmlQuote key={block.id} block={block} />;
        default: console.log("Unknown block type ", block.type);
    }
}

module.exports.EditorConfig = editorConfig;
module.exports.ViewerConfig = viewerConfig;
