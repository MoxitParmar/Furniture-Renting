import React from "react";
import useGetData from "../custom-hooks/useGetData";
import { Container, Row, Col } from "reactstrap";

const AllOrders = () => {
  const { data: ordersData, loading } = useGetData("orders");
  console.log(ordersData);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Images</th>
                  <th>Items Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h4 className="py-5 text-center fw-bold">Loading....</h4>
                ) : (
                  ordersData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        {item.id}
                      </td>
                      <td>
                        {item.items.map((i) =>(
                          <img src={i.imgUrl} alt="" />
                        ))}
                      </td>
                      <td>{item.quantity}</td>
                      <td>$ {item.amount}</td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AllOrders;
