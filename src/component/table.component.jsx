import React from "react";

export default function Table({ columns, items }) {
  return (
    <>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              {columns.map((column, index) => {
                return (
                  <th scope="col" key={index}>
                    {column.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  {
                    columns.map((column,id)=>{

                        if(column.paths){
                            return <td key={`col-${id}`}>{item[column.paths]}</td>
                        }

                        return column.getContent(item)
                        
                            
                        

                        
                    })
                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
