import { useDispatch } from "react-redux";
import FilterSection from "../../components/FiltersSection/FilterSection.jsx";
import CampersList from "../../components/CampersList/CampersList.jsx";
import styles from "./CatalogPage";
import { useEffect } from "react";
import { fetchAllCampersForFirstPage } from "../../redux/catalogOps.js";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampersForFirstPage());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <FilterSection />
      <CampersList />
    </div>
  );
}
