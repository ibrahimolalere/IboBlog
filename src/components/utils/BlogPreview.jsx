const BlogPreview = ({author,title,content}) => {
    return ( <div>
        <div>
            {title}
        </div>
        <div>
            {author}
        </div> <div>
            {content}
        </div>
    </div> );
}
 
export default BlogPreview;