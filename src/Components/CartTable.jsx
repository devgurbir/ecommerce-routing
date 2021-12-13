import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    cartTable: {
        border: "1px solid #ccc",
        margin: "0 auto",
        color: "secondary"
        
    }
})
export default function CartTable({children}){
    const classes = useStyles();
    return (
        <table className = {classes.cartTable}>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Final Price</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}