import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { ListagemDashboard } from "./styled";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { BtnDefault } from "../../components/Styled";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("alta");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleRedirect = () => {
    navigate("/cadastro-itens");
  };  

  const fetchProducts = async () => {
    try {
      const response = await api.get("/product/find-all");
      setProducts(response.data.product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setValue(value === "alta" ? "baixa" : "alta");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const handleNumberChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  const handleProductChange = (event) => {
    var selectedProductId = event.target.value;
    setSelectedProduct(selectedProductId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.patch(`stock-product/${value}/stock=1/product=${selectedProduct}/quantity=${selectedNumber}`);
      closeDialog();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ListagemDashboard>
      <div style={{ display: "flex", float: "inline-end", width: "40rem", margin: "1rem" }}>
        <BtnDefault onClick={openDialog}>
          Movimentação Estoque
        </BtnDefault>
        <BtnDefault onClick={handleRedirect}>
          Novo Item
        </BtnDefault>
      </div>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Movimentação de Estoque</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <RadioGroup
              row
              color=""
              value={value}
              onChange={handleChange}
              style={{ justifyContent: "space-around" }}
            >
              <FormControlLabel
                value="alta"
                control={<Radio />}
                label="Entrada"
              />
              <FormControlLabel
                value="baixa"
                control={<Radio />}
                label="Saída"
              />
            </RadioGroup>
            <br />
            <FormControl
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <InputLabel id="produto-label">Produto</InputLabel>
              <Select
                value={selectedProduct}
                onChange={handleProductChange}
                labelId="produto-label"
                style={{ width: "100%" }}
              >
                {products.map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <FormControl
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <InputLabel>Quantidate</InputLabel>
              <Input
                type="number"
                value={selectedNumber}
                onChange={handleNumberChange}
                style={{ width: "100%" }}
              />
            </FormControl>
            <br />
            <FormControl
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  format="DD/MM/YYYY"
                  value={selectedDate}
                  onChange={handleDateChange}/>
              </LocalizationProvider>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeDialog}
            color="primary"
            variant="outlined"
            autoFocus
          >
            Fechar
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            autoFocus
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
      <iframe
        title="Dashboard"
        width="100%"
        height="1000"
        src="https://lookerstudio.google.com/embed/reporting/48bd6e46-b598-4e0b-b36c-644ea334d324/page/p_a2wuv8816c"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </ListagemDashboard>
  );
};