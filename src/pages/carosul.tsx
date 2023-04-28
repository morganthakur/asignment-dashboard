import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header";
import styles from '../styles/Home.module.css'
import { useGetAllProductsQuery } from "../../redux/Services/ProductApi";
function UncontrolledExample() {

  const { data, error, isLoading } = useGetAllProductsQuery("");

  return (
    <>
      <Header />
      <div className={styles.carsolWrapper}>
        <Carousel >
          {data?.products.map((item: any, index: any) => {
            return (
              <Carousel.Item  key={index} >
                <img
                  // className="d-block w-100"
                  src={item?.thumbnail}
                  alt=""
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default UncontrolledExample;
