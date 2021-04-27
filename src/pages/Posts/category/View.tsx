import { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { PropsType } from './View.Types'

class CategoryView extends Component<PropsType> { 
    constructor(props: any) {
        super(props)
    }

    render() {

        return (
            <h1>
                Category: {this.props.match.params.categoryName}
            </h1>
        )
    }
}

export default withRouter(CategoryView)
