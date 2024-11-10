import { useEffect, useState } from "react"

import "./style.css"

const Light = () => {

    const [boxes, setBoxes] = useState([
        {
            id: '1',
            isVisible: true,
            isClicked: false
        },
        {
            id: '2',
            isVisible: true,
            isClicked: false
        },
        {
            id: '3',
            isVisible: true,
            isClicked: false
        },
        {
            id: '4',
            isVisible: true,
            isClicked: false
        },

        {
            id: '5',
            isVisible: false,
            isClicked: false
        },
        {
            id: '6',
            isVisible: false,
            isClicked: false
        },
        {
            id: '7',
            isVisible: true,
            isClicked: false
        },

        {
            id: '8',
            isVisible: true,
            isClicked: false
        },
        {
            id: '9',
            isVisible: true,
            isClicked: false
        }

    ])


    const [queue, setQueue] = useState([])

    useEffect(() => {

        if (queue.length === 7) {

            for (let i = 0; i < queue.length; i++) {

                setTimeout(() => {
                    setBoxes((prev) => {
                        let d = [...prev];
                        d[queue[i]].isClicked = false
                        return d;
                    })
                    setQueue((p) => {
                        let d = [...p];
                        d.unshift();
                        return d;
                    })
                }, 1000 * i)

            }

        }

    }, [queue.length])


    const handleClick = (index) => {

        setBoxes((prev) => {
            let newArr = [...prev];
            newArr[index].isClicked = true;
            return newArr
        })

        setQueue((prev) => {
            let new2 = [...prev];
            new2.push(index);
            return new2;
        })

        console.log("queue", queue)
    }
    return (
        <div className="container">
            {
                boxes.map((item, index) => {
                    return item.isVisible ? <div onClick={() => handleClick(index)} className={`box ${item.isClicked ? "green" : "yellow"}`}>{index + 1} </div>
                        : <div> </div>
                })
            }

        </div>
    )
}

export default Light;