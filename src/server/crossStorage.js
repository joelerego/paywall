/*
 * Copyright 2017-2020 Samuel Rowe, Joel E. Rego
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import crossStorage from "cross-storage";

const newCrossStorage = async () => {
    const result = new crossStorage.CrossStorageClient(
        `${process.env.REACT_APP_WEBSITE_URL}/hub.html`
    );
    await result.onConnect();
    return result;
};

export default {
    connection: newCrossStorage(),
};
