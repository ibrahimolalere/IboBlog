
const BlogForm = ({formData:{title,content},onFormInputChanged,onSubmit,buttonTitle}) => {
    return ( <div>
        <form onSubmit={onSubmit}>

        <div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" name="title" value={title} onChange={onFormInputChanged} className="form-control" id="title" placeholder="Blog title"/>
</div>
<div className="mb-3">
  <label htmlFor="content" className="form-label">Content</label>
  <textarea className="form-control" value={content} name="content" id="content" onChange={onFormInputChanged} placeholder="Blog content" rows="3"></textarea>
</div>

<div>
    <button className="btn btn-primary" type="submit">{buttonTitle}</button>
</div>
        </form>
    </div> );
}
 
export default BlogForm;