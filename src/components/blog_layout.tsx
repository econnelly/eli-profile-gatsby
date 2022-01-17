import React from "react";
import PropTypes from "prop-types";

interface Props {
    title?: string
    children: React.ReactNode
}

const BlogLayout = (props: Props) => {
    return (
        <article>{props.children}</article>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BlogLayout