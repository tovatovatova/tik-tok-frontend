import { Section } from "./Results"


type Params = {
    section: Section
    setModalOpen: (_: boolean) => void
}
export default ({ section, setModalOpen }: Params) => {

    return <div onClick={() => setModalOpen(true)} style={{cursor: "pointer"}}>
        <h1 style={{ color: "white", textAlign: "center", marginBottom: "5px" }}>{section.score}</h1>
        <p style={{ display: "inline-block", marginTop: "5px", marginBottom: "5px" }}>{section.reason}</p>
        <h3 style={{ display: "inline-block", color: "white" }}>...</h3>
        </div>
}
