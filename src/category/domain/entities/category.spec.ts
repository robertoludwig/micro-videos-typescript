import {Category} from "./category";

describe("Category Unit Tests", () => {

    test("constructor of category", () => {
        // Arrange
        let props = {
            name: "Movie",
            description: "some description",
            is_active: true,
            created_at: new Date(),
        }

        // Act
        let category = new Category(props);

        // Assert
        expect(category.name).toBe('Movie');
        expect(category.description).toBe("some description");
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBe(category.props.created_at);
        expect(category.props.created_at).toBeInstanceOf(Date);

        // é possível usar a comparação exata do objeto
        expect(category.props).toStrictEqual(props);


        // mais formas de testar
        category = new Category({
            name: "Movie"
        });
        category['description'] = "other description";
        expect(category.description).toBe("other description");

        category['description'] = undefined;
        expect(category.description).toBeNull();
        category['description'] = null;
        expect(category.description).toBeNull();

    });

    test("getter and setter of is_active prop", () => {
        let category = new Category({
            name: "Movie"
        });
        expect(category.is_active).toBeTruthy();

        category = new Category({
            name: "Movie",
            is_active: true
        });
        expect(category.is_active).toBeTruthy();

        category = new Category({
            name: "Movie",
            is_active: false
        });
        expect(category.is_active).toBeFalsy();
    });

    test("getter and setter of created_at prop", () => {
        let category = new Category({
            name: "Movie"
        });
        expect(category.created_at).toBeInstanceOf(Date);

        let created_at = new Date();
        category = new Category({
            name: "Movie",
            created_at: created_at
        });
        expect(category.created_at).toBe(created_at);

    });

});