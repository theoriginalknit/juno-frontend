const A="data:image/png;base64,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";export{A};