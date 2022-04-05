import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto px-5 my-20 b-10 min-h-screen flex justify-center gap-5 flex-wrap fadeIn'>

            <h1 className='basis-full text-center text-4xl font-medium underline underline-offset-8 text-gray-900'>Question and Answer</h1>

            <div className='basis-80 grow shrink shadow-md max-h-[28rem] p-5 border rounded-md'>
                <h3 className='text-xl font-medium text-gray-900 min-h-[3rem] leading-6'><span className='underline underline-offset-2 decoration-[3px]'>Question 1 :</span> What is Context API?</h3>
                <span className='underline underline-offset-2 decoration-[3px] text-lg font-medium text-gray-900'>Answer :</span> <h4 className='text-gray-900/70 text-justify leading-5 px-2 py-1 max-h-72 overflow-auto'>The React Context API is a way to declare global variables that can be passed to the other components.Context provides a way to pass data through the component tree without passing props down manually at every level.This is the alternative to "prop drilling" which is used to move props from grandparent to parent to child component,and so on.</h4>
            </div>

            <div className='basis-80 grow shrink shadow-md max-h-[28rem] p-5 border rounded-md'>
                <h3 className='text-xl font-medium text-gray-900 min-h-[3rem] leading-6'><span className='underline underline-offset-2 decoration-[3px]'>Question 2 :</span> What is Semantic Tag?</h3>
                <span className='underline underline-offset-2 decoration-[3px] text-lg font-medium text-gray-900'>Answer :</span> <h4 className='text-gray-900/70 text-justify leading-5 px-2 py-1 max-h-72 overflow-auto'>Semantic tag is HTML tag that introduces meaning to the web page rather than just presentation. Semantic HTML tags gives information about the contents of the tags that describe more about how the contents look on a page.Semantic tags are used when someone want to mark up a content block that has an important role in the document structure.</h4>
            </div>

            <div className='basis-80 grow shrink shadow-md max-h-[28rem] p-5 border rounded-md'>
                <h3 className='text-xl font-medium text-gray-900 min-h-[3rem] leading-6'><span className='underline underline-offset-2 decoration-[3px]'>Question 3 :</span> Difference between inline and block and inline-block?</h3>
                <span className='underline underline-offset-2 decoration-[3px] text-lg font-medium text-gray-900'>Answer :</span> <h4 className='text-gray-900/70 text-justify leading-5 px-2 py-1 max-h-72 overflow-auto'>Inline: Inline elements are the elements which has a fixed height and width.the height and width values of Inline elements cant be set manually.<br />Block: Block elemenst are those which starts on a new line and take available the full width.the width and height values of Block elements can be set.<br />Inline Block: Inline Block are like inline elements,but the difference is, the height and width values can be set manually.</h4>
            </div>
        </div>
    );
};

export default Blogs;