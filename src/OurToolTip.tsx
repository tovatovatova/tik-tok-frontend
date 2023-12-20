import { HTMLProps } from "react"
import { Section } from "./Results"


type Params = {
    section: Section
} & HTMLProps<HTMLDivElement>
export default ({ section, ...params }: Params) => {

    return <div style={{cursor: "pointer"}} {...params}>
        <h1 style={{ color: "white", textAlign: "center", marginBottom: "5px" }}>{section.score}</h1>
        <p style={{ display: "inline-block", marginTop: "5px", marginBottom: "5px" }}>{section.reason}</p>
        <h3 style={{ display: "inline-block", color: "white" }}>...</h3>
        </div>
}
