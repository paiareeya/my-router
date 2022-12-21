import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

class Dashbord extends Component {

    startType = "Grapefruit"

    constructor(props) {
        super(props)
        this.state = {
            idVal: '',
            nameVal: '',
            input: [],
            typeVal: this.startType,
            updete: [],
            isEdit: false,
            img: ''
        }
    }

    onChangeID = (e) => {
        this.setState({
            idVal: e.target.value
        })
    }
    onChangeName = (e) => {
        this.setState({
            nameVal: e.target.value
        })
    }
    onChangeType = (e) => {
        this.setState({
            typeVal: e.target.value
        })
    }
    handleChangeImage = e => {
        this.setState({
            img: URL.createObjectURL(e.target.files[0])
        })
    }

    Submit = (idVal) => {
        // event.preventDefault();

        console.log(idVal);

        const ag = this.state.input.find(item => item.idVal === idVal)
        console.log(ag);

        if (ag === undefined) {
            const setData = this.state.input

            setData.push({
                idVal: this.state.idVal ? this.state.idVal : '',
                nameVal: this.state.nameVal ? this.state.nameVal : '',
                typeVal: this.state.typeVal ? this.state.typeVal : '',
                img: this.state.img
            })
            this.setState({
                input: setData
            })
            console.log('this.state.input', this.state.input);
        }
    }

    Update = (idVal) => {

        //!SECTION รับค่า idVal มาก จากนั้นทำการ map หา idVal จะได้เป็น obj.idVal แล้วเอาเช็คกับค่าที่รับเข้ามา คือ idVal ถ้าตรงจะทำ ใน return แรก คือจะเอาค่าใหม่ยัดเข้าไป ในตัวแปลนั้นๆ เมื่อข้อมูลเข้าไปอยู่ใน Lists ก็ทำการ setState บบทัดที่ 72
        const Lists = this.state.input.map((obj) => {
            if (obj.idVal === idVal) {
                return {
                    idVal: this.state.idVal ? this.state.idVal : '',
                    nameVal: this.state.nameVal ? this.state.nameVal : '',
                    typeVal: this.state.typeVal ? this.state.typeVal : '',
                    img: this.state.img
                }
            }
            else {
                return obj
            }
        })

        this.setState({
            input: Lists
        })

    }

    onUpdate = (item) => {
        // console.log("item", item);
        this.setState({
            idVal: item.idVal,
            nameVal: item.nameVal,
            typeVal: item.typeVal,
            img: item.img,
            isEdit: true
        })

    }

    onDelete = (idVal) => {
        const Remove = this.state.input.filter((l) => l.idVal !== idVal);
        this.setState({ input: Remove })
    }

    render() {
        return (
            <section className="dashbord">
                <br />
                <div className="form-dashbord">
                    <div className="form-row">
                        <label htmlFor="id" className="form-label">ID</label> &nbsp;
                        <input type='text' className="form-input" id='id'
                            value={this.state.idVal} onChange={(e) => { this.onChangeID(e) }}
                            disabled={this.state.isEdit} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="name" className="form-label">Name</label> &nbsp;
                        <input type='name' className="form-input" id='name'
                            value={this.state.nameVal} onChange={(e) => { this.onChangeName(e) }} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="type" className="form-label">Type</label> &nbsp;
                        <select value={this.state.typeVal} onChange={(e) => { this.onChangeType(e) }} >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="type" className="form-label">Image</label>
                        <input type="file" id="img" name="img" accept="image/*" style={{ display: "none" }} onChange={this.handleChangeImage} />
                        <label className="form-Input" for="img"><FontAwesomeIcon icon={faUpload}></FontAwesomeIcon></label>
                    </div> <br />
                    <button className="btn-add" onClick={() => { this.Submit(this.state.idVal) }}>บันทึก</button>
                    <button className="btn-add" onClick={() => { this.Update(this.state.idVal) }}>อัพเดต</button>

                </div>

                <div className="show-product">
                    <div className="label-product">
                        <h4>Image</h4>
                        <h4>ID</h4>
                        <h4>Name</h4>
                        <h4>Type</h4>
                    </div>
                    <div className="form-list">
                        <ul>
                            {this.state.input.map((item, index) =>
                                <li key={index}>
                                    <img src={item.img} alt="img" />
                                    <span>{item.idVal}</span>
                                    <span>{item.nameVal}</span>
                                    <span>{item.typeVal}</span>
                                    <button className="btn-edit" onClick={() => { this.onUpdate(item) }}> Update </button>
                                    <button className="btn-del" onClick={() => { this.onDelete(item.idVal) }}> Delete </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
};

export default Dashbord;