# Quill Word Count

Custom module for [Quill.js](https://github.com/quilljs/quill) to calculate word count

## Usage
### Webpack/ES6

```javascript
var quill = new Quill('#quill-editor', {
            modules:{
                toolbar: false,
                wordCount: {
                    container: '#counter',
                    unit: 'word'
                }
              },
              theme: 'snow'
});
```

## Contributing

Please check out our [contributing guidelines](CONTRIBUTING.md).