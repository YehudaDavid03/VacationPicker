import React, { useState, useEffect } from "react"

const ResultView = ({ resultView, data }) => {
  const [sendResult, setSendResult] = useState({})

  useEffect(() => {
    const match = (element) => element.type == resultView?.type && element.temperature == resultView?.temperature && element.flight == resultView?.flight;
    
    if (data.findIndex(match)) {
      setSendResult(data[data.findIndex(match)])
    } else { setSendResult({}) }
  }, [resultView, data])

  return (
    sendResult?.image ? 

    (
      <div className="main-result-view">
        <div style={{backgroundImage: `url(${sendResult.image})`}} className="main-result-view-img"></div>

        <div className="main-result-view-info">
          <h3>{sendResult.title}</h3>

          <p>
            {
              sendResult.summary ?

              (sendResult.summary)

              :

              (
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium rem animi reiciendis eaque hic minus magnam in odit doloremque, dignissimos, tenetur iste voluptas illo voluptatibus temporibus expedita vel perferendis deleniti. Ad quibusdam praesentium obcaecati eligendi aliquam fugiat, omnis id quia nulla numquam quod saepe quisquam possimus nobis laudantium amet eaque quidem, molestiae nisi, perspiciatis voluptatum. Inventore accusamus soluta esse laborum?Et ipsum dolor assumenda veniam ducimus aspernatur maxime sequi, id ex sit soluta atque laboriosam distinctio repellendus ad labore quas corrupti voluptates, velit nesciunt adipisci fuga. Officiis quam ipsum doloremque? Excepturi deleniti qui amet delectus a, illum reprehenderit vero dicta nulla natus. Accusamus earum facilis corrupti ipsa repellendus voluptatum blanditiis quasi voluptas necessitatibus eius eveniet quam, culpa cupiditate? Quam, nemo.Hic repellat assumenda nisi ea nulla similique animi adipisci modi ex pariatur impedit excepturi iusto, ipsam autem ipsum sint vitae tempore aliquam esse omnis. Doloribus sed labore dolorum natus tempore."
              )
            }
          </p>
        </div>
      </div>
    )

    :

    (
      <h1>No Results...</h1>
    )
  )
}

export default ResultView