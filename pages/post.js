class Post extends React.Component {
    static async getInitialProps({query: {title}}) {
      console.log('TITLE', title)
      return { title }
    }
    render() {
      return <h1>This blog post title is: {this.props.title}</h1>
    }
  }
  
  export default Post