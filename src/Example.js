import React from 'react';
import ReactDOM from 'react-dom';
import ReactCursorPosition from 'react-cursor-position';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import './Example.css';

let targetElement = null;

class Example extends React.Component {
    // targetElement = null;

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            targetElement = node.querySelector('.example__label');
            console.log(targetElement)
        }
    }

    render() {
      return (
        <ReactCursorPosition className="example">
          <PositionLabel  />
        </ReactCursorPosition>
      );
    }
  }

  

  const PositionLabel = (props) => {
    let {
      isActive = false,
    } = props;

    const checkIfActive = () => {
            if(isActive === true) {
                disableBodyScroll(targetElement);
            }
            else {
                enableBodyScroll(targetElement);
            }
    }    

    return (
        <div className="example__label"  onMouseEnter={checkIfActive()}>
            {`isActive: ${isActive}`} <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec quam purus. Nam mollis ipsum et quam auctor rutrum. Donec commodo orci quis blandit ornare. Maecenas ac vulputate leo. Nunc sollicitudin mattis tellus, in tristique enim congue faucibus. Praesent mollis egestas elit id ultricies. Nulla venenatis tellus id eros facilisis vehicula. Curabitur nunc nunc, tempor vel consectetur dapibus, scelerisque sed libero. Phasellus imperdiet lectus lectus, non posuere nunc dignissim et. Integer cursus tempus enim, eget hendrerit lacus venenatis quis. Praesent scelerisque nec elit non cursus. Aenean urna elit, pellentesque nec porttitor ac, fringilla non quam.
            Nunc tristique efficitur ligula, tincidunt facilisis ex dictum eu. Sed pharetra, lectus non blandit pretium, magna nibh pulvinar ex, eget aliquam risus nisl posuere quam. Nunc accumsan felis quis dolor consequat vestibulum. Nullam vel nulla mi. Donec maximus risus nec blandit tristique. Duis ex leo, tristique eu lacinia vestibulum, sodales eu sapien. Praesent facilisis eget sem ac molestie. Curabitur vitae nunc pellentesque, tempor purus nec, gravida tortor. Fusce id massa vel felis iaculis congue vel ac nulla.
            Nunc sed suscipit arcu. Proin semper mauris vehicula, dapibus leo non, condimentum velit. Fusce sit amet erat ante. Maecenas tempor felis at tortor elementum pulvinar. Sed scelerisque malesuada orci, eget blandit metus congue sed. Aliquam volutpat eu mauris ut tristique. In hac habitasse platea dictumst. 
        </div> 
    );
  };

  export default Example;