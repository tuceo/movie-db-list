import {FiltersTitle, FiltersWrapper, Label} from "./style";
import {Form} from "react-bootstrap";

const Filters = ({filters, setFilters}) => {

    const handleChange = (name, e) => {
        setFilters({
            ...filters,
            [name]: e?.target?.value,
            page: 1,
        })
    }

    return (
        <FiltersWrapper>
            <FiltersTitle>Filters</FiltersTitle>

            <Label label="Title">
                <Form.Control placeholder="Title" onChange={(e) => handleChange("s", e)} defaultValue={filters?.s}/>
            </Label>

            <Label label="Release Year">
                <Form.Control placeholder="Release Year" onChange={(e) => handleChange("y", e)}
                              defaultValue={filters?.y}/>
            </Label>

            <Label label="Type">
                <Form.Select onChange={(e) => handleChange("type", e)}>
                    <option>Select a type</option>
                    <option>movie</option>
                    <option>series</option>
                    <option>episode</option>
                </Form.Select>
            </Label>
        </FiltersWrapper>
    );
};

export default Filters;
