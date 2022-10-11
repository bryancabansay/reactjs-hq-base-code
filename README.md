# ReactJS Base Code

Base code for building ReactJS apps. Uses `typescript` and was built on top of [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).  
Uses the following tech stack:

- [React v17.0.2](https://reactjs.org/) - main rendering library

- [Ant Design](https://ant.design/) - component library

- [mobx](https://mobx.js.org/README.html) - state management

- [axios](https://github.com/axios/axios) - http client for sending server requests

- [i18n-js](https://github.com/fnando/i18n-js) - language translation library

- [prettier](https://prettier.io/) - code formatter

- [jest](https://jestjs.io/) - general testing framework for javascript

- [enzyme](https://enzymejs.github.io/enzyme/) - testing framework specifically for React Components

<br/>

# Requirements

- [Node](https://nodejs.org/en/download/) v16.17.0 or newer

- [NPM (packaged with node)](https://nodejs.org/en/download/) v8.19.1 or newer

- [Python](https://www.python.org/downloads/release/python-3106/) v3.10.6 or newer

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) v1.22.19 or newer

- [Visual Studio Code](https://code.visualstudio.com/) - for code editing (or any IDE preferred)

<br/>

# VS Code Extensions (Optional)

When using VS code, these extensions are highliy encouraged.

- [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) by Microsoft

- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

<br/>

# Available Scripts

## Installation

```sh
$ yarn install  # install dependencies
$ yarn start    # start the application
```

<br/>

## Create Build

```sh
$ yarn run build # Creates a build folder which can be used by the server
```

## Run Test

```sh
$ yarn test      # Runs all the tests created and shows results
```

<br/>

# Coding Standards

Should be strictly followed unless there is an important reason not to.

1. Never use class based components except for [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html) class.
2. Always use [hooks](https://reactjs.org/docs/hooks-overview.html).
3. Use [async and await](https://javascript.info/async-await) instead of [promises](https://javascript.info/promise-basics) to prevent then-catch chain hell (except for using axios in API calls).
4. Always use interfaces for props definition for each component.
5. Use enums wherever appropriate.
6. Use color constants for hex colors (/src/theme/color.ts).
7. For multiple concurrent async functions, use [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
8. Follow [setup-exercise-verify-teardown principle](http://xunitpatterns.com/Four%20Phase%20Test.html) for testing.
9. Always resolve errors or warnings identified by the linter. Pull requests with errors or warnings will not be merged. Do not use ignore warning lines as well.
10. Always split the code into multiple smaller functions. If you have a very long code, break it down to smaller parts especially those blocks that can be reused.
11. Always provide a method signature for each function.
12. Commenting on the logic of the code is highly encouraged.
13. Create multiple small files instead of writing a very big file.
14. Always use the appropriate names for functions, files, and folders. Follow the format of existing ones for reference.
15. Always write tests for your own code. Do not let others do it for you.
16. Always use the DRY (do not repeat yourself) principle.
17. Never place in line css code inside components.
18. Always destructure your props to make the code cleaner.
19. Use the mobx store for properties that need to be stored in local storage. For other data, use the [`useState`](https://reactjs.org/docs/hooks-state.html) hook instead.
20. Use the [`useMemo`](https://reactjs.org/docs/hooks-reference.html#usememo) hook for expensive operations.
21. Always use typescript (`.tsx` and `.ts` files) unless there is an important reason not to.
22. Always use the [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) operator if a property can be null or undefined.
23. Do not use `console.log` ever. For logging, use the `log` function in the `/src/config/console` file. Note: this will only log in dev mode.
24. Create an `index.ts` within each folder for exporting. This will reduce repeating names on the imports.
25. The `src/components` folder are for reusable components only. Screen specific components are to be placed in their own screen folders.
26. For spacing, always use the spacing values found in the `theme` directory.
27. Always use types whenever possible.

<br/>

# How to Use

## A. Installing third party packages

1.  Always use `yarn`. Why yarn? [It is faster and more secure at the cost of space](https://phoenixnap.com/kb/yarn-vs-npm).

    ```sh
    $ yarn add <package-name>
    ```

2.  Do not add packages randomly. Ask permission first. There should be a solid reason or rationale for doing so.

3.  Clearly identify if the package to be installed is used only in development and not in production. In this case, save it only as a dev dependency.

    ```sh
    $ yarn add -D <package-name> # for dev only modules
    $ yarn add <package-name>    # for non-dev modules
    ```

<br/>

## B. Environment Variables

1. All environment variables are to be added in the `.env` file.

2. All variable names should start with the `REACT_APP_` prefix and should be in the upper case. For example, we want to add `API_KEY`. The correct variable name should be `REACT_APP_TIMEOUT_DEFAULT`. For more info, there is a documentation about [adding custom ENV variables and why the use of the REACT_APP prefix](https://create-react-app.dev/docs/adding-custom-environment-variables#adding-development-environment-variables-in-env).

3. All newly added variables should also be added in the `.env.template` file. The `.env` file is ignored by git, creating a new one is required for new installs. The `.env.template` file will serve as basis for the required environment variables.

4. Do not store any secrets (such as private API keys).

5. When using environment variables, place all of it in the properties file. To access the variable, use the `process.env.<VARIABLE_NAME>` syntax. As an example, use the `process.env.REACT_APP_TIMEOUT_DEFAULT` when creating the variable mentioned in item 2.

6. The environment variables are embedded during build time. This means that the values are only read during the `yarn start` command. To reflect the new changes of the `.env` file, the app should be stopped and restarted.

<br/>

## C. Adding Components (For Reusable Components Only)

1. Create a separate folder in the `src/components` directory (e.g. button).

2. Create separate files for the actual component, css styling, properties, and test.

3. The component file should contain code pertaining to the actual component itself. It should be named `<component-name>.tsx` since it will contain jsx code.

4. The css styling file should contain all the css styles (in JSON format) related to the component. It should be named `<component-name>.css.ts`.

   ```typescript
   export const buttonStyle = {
     margin: 5,
   };
   ```

5. The props file should contain the prop definition of the component as an `interface`.

   ```typescript
   /**
    * Prop types describing the required and optional props for the buttons.
    */
   export interface ButtonProps {
     /**
      * The expected method to be called when the button is clicked.
      */
     onClick: () => void;

     /**
      * Text that should be shown in side the button
      */
     text: string;
   }
   ```

6. The test file should be named `<component-name>.test.tsx`.

7. Styling components using either css via the `className` or directly injecting styles are allowed. For `classNames`, set it in the `App.css` file in the `src/theme` folder.

8. After finishing the component, export it in the `index.ts` file of the `src/components` directory.

<br/>
  
## D. Adding Screens

1. Create a folder in the `src/screens` directory using the page screen as name.

2. Use the format `<screen-name>.tsx` as file name.

3. Create a test file as well using the `<screen-name>.test.tsx` name format.

4. Add prop and css files whenever appropriate.

<br/>

## E. Showing Texts

1. For texts, always use the `translate` function found in the `src/i18n/translate.ts` file.

2. The `translate` function will check the locale of the browser (default is English which is represented by the `en.json` inside the `locale` folder). The first level props represents the screen. The second level props represent the name of the text. For example, if we are going to access the `greet` text from the `helloWorld` page, the text can be retrieved by invoking `translate("helloWorld.greet")`. Example below.

   ```typescript
   import { translate } from "./translate";

   export const HelloWorld = <h1>translate("helloWorld.greet")</h1>;
   ```

<br/>

## F. Storing State (via Mobx)

1. Use the mobx store only if the data needs to persist or be stored in `localStorage` or the values are needed by other components that cant be retrieved using the parent child relationship.

2. When creating a model store, always use a flat design (unless there is a specific reason not to).

3. Appropriately use the correct data type for each property.

4. Follow steps below to create a model store:

   1. Create a folder named `<store-name>-store`.

   2. Inside the folder, create a file named `<stora-name>-store.ts`.

   3. Inside the store file, follow the format below. The example is we are making a count model that stores a count number value.

      ```typescript
      import { Instance, SnapshotOut, types } from "mobx-state-tree";

      export const CountStoreModel = types
        .model("Count")
        .props({
          count: types.number,
        })
        .views((self) => ({
          getCount: () => {
            return self.count;
          },
          getFormattedCount: () => {
            return `Count: ${self.count}`;
          },
        }))
        .actions((self) => ({
          increment: () => {
            self.count = self.count + 1;
          },
          decrement: () => {
            self.count = self.count - 1;
          },
        }));

      const DEFAULT_STATE = {
        count: 0,
      };

      type CountType = Instance<typeof CountStoreModel>;
      export interface Count extends CountType {}
      type CountSnapshotType = SnapshotOut<typeof CountStoreModel>;
      export interface CountSnapshot extends CountSnapshotType {}
      export const createCountDefaultModel = () =>
        types.optional(CountStoreModel, DEFAULT_STATE);
      export const getDefaultCountStoreModel = () => DEFAULT_STATE;
      ```

   4. The methods inside `views` let us get the data from the store. In the example above, if the value of count is 5, the return of the getCount method would also be 5. Not only do we return the raw value of the property, we can also transform it to whatever we want. See example for `getFormattedCount` function.

      ```typescript
      // This will result to 5
      const count = countStore.getCount();

      // Will result to `Count: 5`
      const formattedCount = countStore.getFormattedCount();
      ```

   5. For updating the values inside the store, define functions inside `actions`. In the example above, the `increment` function increases the count to 1 while the `decrement` function reduces it by 1.

   6. Always define a `default state`. The default state will be used during first load of the application especially if the localStorage have no record of the state.

   7. After defining the model, register it in the `src/models/root-store/root-store` file like the example below. Be mindful in the naming of the store. For example if you want to name the store as this will be used by all the components that needs access to the data.

      ```typescript
      import { Instance, SnapshotOut, types } from "mobx-state-tree";
      import {
        CountStoreModel,
        getDefaultCountStoreModel,
      } from "../count-store/count-store";

      /**
       * A RootStore model.
       */
      export const RootStoreModel = types.model("RootStore").props({
        countStore: types.optional(
          CountStoreModel,
          getDefaultCountStoreModel()
        ),
      });
      ```

   8. Export the contents of the file inside the `index.ts` file of the `src/models` directory.

      ```typescript
      export * from "./count-store/count-store";
      ```

   9. Create a test file for the contents of the store. See example below for the CountStore.

      ```typescript
      import { createCountDefaultModel } from "./count-store";

      describe("CountStoreModel", () => {
        it("should correctly increase and decrease count.", () => {
          // setup
          const snapshot = createCountDefaultModel();
          const incrementStore = snapshot.create();
          const decrementStore = snapshot.create();

          // exercise
          incrementStore.increment();
          decrementStore.decrement();

          // verify
          expect(incrementStore.count).toBe(1);
          expect(decrementStore.count).toBe(-1);
        });
      });
      ```

5. To use the store data inside a component, use the `observer` method from the `mobx-react-lite` library and use the `useStores` hook inside the `src/models/root-store-context.ts` file. The observer function will trigger a check for updates whenever the store values being listened to are updated.

   ```typescript
   import { observer } from "mobx-react-lite";
   import { useStores } from "../../models";

   export const HelloWorld = observer(() => {
     const { countStore } = useStores();
     const count = countStore.getCount();
     return <h1>{count}</h1>;
   });
   ```

6. For API calls, put these inside the `actions` part of the store. Then update the value of the model whenever a result is received from the request. In the example below, assume we have an API service calling the updated count saved in the server.

   ```typescript
   import { Instance, SnapshotOut, types } from "mobx-state-tree";
   import { getCount } from "./countApi";

   export const CountStoreModel = types
     .model("Count")
     .props({
       count: types.number,
     })
     .actions((self) => ({
       updateCount: (count: number) => {
         self.count = count;
       },
     }))
     .actions((self) => ({
       getCountFromServer: async () => {
         const countResult = await getCount();
         self.updateCount(countResult);
       },
     }));
   ```

<br/>

## G. API Calls

1. Use the `axios` library for API calls.
2. Use promise then-catch format.

   ```typescript
   import axiosInstance from "./axios-instance";
   import { log } from "../../config";

   export const login = async (username: string, password: string) => {
     return await axiosInstance
       .post("http://test/com", { username, password })
       .then((result) => {
         return result.data;
       })
       .catch((error) => {
         log("Unable to login: ", error);
         return null;
       });
   };
   ```

3. Always log the error returned from the server. The return value should be based on the logic of the API call.

4. For each API endpoint, use only 1 axios instance. Avoid using a new instance of axios every time a request is made. Create a separate `axios-instance.ts` file and import its content. See example below.

   ```typescript
   // Do not use this for your API calls.
   // This creates a new instance of axios every time
   import axios from "axios";

   // Inside axios-instance.ts
   import axios, { AxiosInstance } from "axios";
   import { API_KEY, API_URL } from "../../config/properties";

   export const axiosInstance: AxiosInstance = axios.create({
     baseURL: API_URL,
     timeout: 5000,
     headers: {
       "x-api-secret": API_KEY,
     },
   });

   export const setToken = (token: string) => {
     if (token) {
       axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
     } else {
       delete axiosInstance.defaults.headers.common.authorization;
     }
   };

   // When using an API see step 2 on how to use the axios instance.
   ```

5. For attaching intercepting requests and responses, use [axios intereceptors](https://axios-http.com/docs/interceptors).

<br/>

## H. Creating Tests

1. Alway use the setup, exercise, verify, and teardown format.

2. Use jest for general testing (functions, models, API calls, etc.).

3. Use enzyme exclusively to test components.

4. Test coverage should be 100%.

<br/>

# Additional Resources

## Reading

- [Modern Javascript Tutorial](https://javascript.info/) ⭐
- [React JS Official Documentation](https://reactjs.org/tutorial/tutorial.html) ⭐
- [What is REST API?](https://www.visual-paradigm.com/guide/development/what-is-rest-api/)
- [Four-Phase Testing Pattern](https://thoughtbot.com/blog/four-phase-test)
- [Jest Tutorial](https://www.softwaretestinghelp.com/jest-testing-tutorial/)
- [How to Test Using Jest and Enzyme](https://pusher.com/tutorials/react-jest-enzyme/)

## Video

- [Typescript Tutorial](https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh)⭐
- [What is React JS?](https://www.youtube.com/watch?v=Y6aYx_KKM7A&ab_channel=Simplilearn)
- [ReactJS Tutorial](https://www.youtube.com/watch?v=Ke90Tje7VS0&ab_channel=ProgrammingwithMosh) ⭐
- [Jest Crash Course](https://www.youtube.com/watch?v=ajiAl5UNzBU&ab_channel=LaithAcademy)
- [Test Driven Development With Jest and Enzyme](https://www.youtube.com/watch?v=-bmdf1oATQo&ab_channel=Bitfumes)

<br/>

⭐ = Highly Recommended

<br/>

# Notes

- When performing a commit using git, `prettier` is invoked to format the code so that it will have a standardized style. This may cause a slight delay but wil not take too much time.
