import { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { PropsType } from './View.Types'

class DetailPostView extends Component<PropsType> { 
    constructor(props: any) {
        super(props)
    }

    render() {

        return (
            <h1>
                Detail post {this.props.match.params.idPost}
            </h1>
        )
    }
}

export default withRouter(DetailPostView)
