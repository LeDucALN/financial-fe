import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Container, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-mobile-datepicker";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { dateConfig } from "../config/dateConfig";
function SpendingAdd() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState("");
  const [category, setCategory] = useState(1);
  const [money, setMoney] = useState(0);
  const [note, setNote] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState({ money: "", category: "", note: "" });

  const [dateData, setDateData] = useState({
    time: new Date(),
    isOpen: false,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT_PRODUCT}/categories`)
      .then((res) => {
        setCategories(res.data.data.categories);
      });
  }, []);

  // const handleClick = () => {
  //   setDateData({ isOpen: true });
  // };

  const handleToggle = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setShowDatePicker(!showDatePicker);
  };

  const handleCancel = () => {
    setDateData({ isOpen: false });
  };

  const handleSelect = (time) => {
    setDateData({ time, isOpen: false });
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!category) {
      setError({ category: "*category is required" });
    }
    if (money <= 0) {
      setError({ money: "*Số tiền phải lớn hơn 0!" });
    }

    if (category && money > 0) {
      axios
        .post(`${process.env.REACT_APP_API_ENDPOINT_PRODUCT}/spendings`, {
          money,
          note,
          date: `${dateData.time.getFullYear()}/${
            dateData.time.getMonth() + 1
          }/${dateData.time.getDate()}`,
          categoryId: category,
        })
        .then((res) => {
          if (res.data.data.warning.length)
            toast.warning(res.data.data.warning, {
              autoClose: false,
            });
          navigate("/spendings");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          navigate("/spendings-limit-add");
        });
    }
  };

  return (
    <div className="home container">
      <Container className="spending-add-header">
        <ArrowBackIcon onClick={() => navigate(-1)} />
        <h2 className="spending-add-title">Thêm khoản chi tiêu</h2>
      </Container>
      <Container className="spending-add-body">
        <form>
          <div className="spending-add-money-input">
            <input
              className="spending-add-money"
              type="number"
              name=""
              id=""
              min={0}
              onChange={(event) => setMoney(event.target.value)}
              placeholder="000.000"
            />{" "}
            đ
          </div>
          <div className="error-message">{error.money}</div>
          <div className="spending-add-form_wrapper">
            <FormControl sx={{ minWidth: 350 }}>
              <InputLabel required id="demo-simple-select-label">
                Danh mục
              </InputLabel>
              <Select
                value={category}
                onChange={handleChangeCategory}
                displayEmpty
                label="Danh mục"
              >
                {categories.length
                  ? categories.map((item) => (
                      <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    ))
                  : null}
              </Select>
              <div className="error-message">{error.category}</div>
            </FormControl>
            <TextField
              className="spending-add-form_text"
              style={{ borderRadius: "20px !important", marginTop: "10px" }}
              placeholder="Mua áo"
              required
              onChange={(event) => setNote(event.target.value)}
            />
            <div className="error-message">{error.note}</div>

            <button className="spending-add-form_date" onClick={handleToggle}>
              {dateData.time.getDate()}/
              {(dateData.time.getMonth() + 1).toString().padStart(2, "0")}/
              {dateData.time.getFullYear()}
              <KeyboardArrowDownIcon />
            </button>
            {showDatePicker && (
              <DatePicker
                showCaption={false}
                showHeader={false}
                value={dateData.time}
                isOpen={true}
                isPopup={false}
                theme={"ios"}
                onChange={handleSelect}
                onSelect={handleSelect}
                onCancel={handleCancel}
                dateFormat={["DD", "MM", "YYYY"]}
                confirmText=""
                cancelText=""
                dateConfig={dateConfig}
              />
            )}
            <Button onClick={handleSubmit} className="spending-add-form_button">
              Thêm giao dịch
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default SpendingAdd;
