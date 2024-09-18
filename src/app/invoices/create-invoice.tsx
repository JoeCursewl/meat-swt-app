import NavbarDash from "../dashboard/navbar/navbar-dash"
import { ContainerMain } from "../roles/components/container-main"
import './invoices.css'
import { Link } from "react-router-dom"
import { useState } from "react"

export default function CreateInvoice() {
    const types = ["Compras", "Ventas"]
    const [today, setToday] = useState(new Date())

    // Estado para más detalles
    const [isMoreDetails, setIsMoreDetails] = useState<boolean>(false)

    return (
        <>
            <NavbarDash />

            <ContainerMain>
                <div className='user-title'>
                    <img src="/svgs/svg-c-product.svg" alt="Creación de productos" />
                    <p>Facturas | Puedes consultar la información de las nuevas facturas <Link to={"/dashboard/invoices"}>aquí.</Link></p>
                </div>

                <div className="invoice-form">
                    <form>
                        <div className={`div-with-all-info ${isMoreDetails ? 'div-with-all-info-2' : ''}`}>    
                            <div>
                                <div className="invoice-form-inp">
                                    <label>
                                        Tipo de Factura
                                    </label>
                                    <select name="type" id="type">
                                        {
                                            types.map((type, index) => {
                                                return (
                                                    <option key={index} value={type}>{type}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div>
                                <div className="invoice-form-inp">
                                    <label>Fecha</label>
                                    <input type="date" min={today.toISOString().split('T')[0]}/>
                                </div>
                            </div>

                            <div>
                                <div className="invoice-form-inp">
                                    <label>Descripción</label>
                                    <textarea name="desc" id="desc" placeholder="Descripción de la factura...."></textarea>
                                </div>
                            </div>

                            <div>
                                <div className="invoice-form-inp">
                                    <label>Total</label>
                                    <input type="number" name="total" id="total" placeholder="$ 100.00"/>
                                </div>
                            </div>

                            <div>
                                <div className="invoice-form-inp">
                                    <label>Total</label>
                                    <input type="number" name="total" id="total" placeholder="$ 100.00"/>
                                </div>
                            </div>

                            <div>
                                <div className="invoice-form-inp">
                                    <label>Total</label>
                                    <input type="number" name="total" id="total" placeholder="$ 100.00"/>
                                </div>
                            </div>
                        </div>

                        <div className="inv-add-details" onClick={() => {setIsMoreDetails(!isMoreDetails)}}>
                            <img src="/icons/icon-roles.svg" alt="Agregar detalles" />
                            <label>Agregar detalles</label>
                        </div>

                    </form>
                </div>
            </ContainerMain>
        </>
    )
}