import React from "react";
import PropTypes from "prop-types";
import Footer from "./footer";

interface Props {
    title?: string
    children: React.ReactNode
}

const BlogLayout = (props: Props) => {
    return (
        <>
            <p>{props.title}</p>
            <article>{props.children}</article>
            <Footer />
        </>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BlogLayout