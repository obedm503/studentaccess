## Members

<dl>
<dt><a href="#AppCtrl">AppCtrl</a></dt>
<dd><p>The main controller. AppCtrl is parent to all other controllers. Global functions are defined here and used through the $rootScope.</p>
</dd>
<dt><a href="#NetworkService">NetworkService</a></dt>
<dd><p>Service in charge of handling network errors.</p>
</dd>
<dt><a href="#StudentService">StudentService</a></dt>
<dd><p>Service in charge of making requests to the API.</p>
</dd>
<dt><a href="#UpdateService">UpdateService</a></dt>
<dd><p>Service in charge of determining if data is still valid.</p>
</dd>
</dl>

<a name="AppCtrl"></a>

## AppCtrl
The main controller. AppCtrl is parent to all other controllers. Global functions are defined here and used through the $rootScope.

**Kind**: global variable  
**Ngdoc**: controller  

* [AppCtrl](#AppCtrl)
    * [.getStoredPic()](#AppCtrl.getStoredPic) ⇒ <code>Promise</code>
    * [.refreshEverything()](#AppCtrl.refreshEverything)

<a name="AppCtrl.getStoredPic"></a>

### AppCtrl.getStoredPic() ⇒ <code>Promise</code>
Method retrieves the current student's picture from localStorage and passes it with the resolve callback

**Kind**: static method of <code>[AppCtrl](#AppCtrl)</code>  
**Returns**: <code>Promise</code> - Resolves with the student's picture in Base64 format. Rejects with the specific error found.  
**Requires**: <code>module:[$q](https://docs.angularjs.org/api/ng/service/$q)</code>  
**Example**  
```js
getStoredPic().then(function(pic){
				//pic is the current user's picture in base64 format
			});
```
<a name="AppCtrl.refreshEverything"></a>

### AppCtrl.refreshEverything()
Helper funtion. Calls all data through the [UpdateService](#UpdateService) to check if the data is still valid. If data isn't valid or is undefined, call the [StudentService].Function is called on [AppCtrl] load.

**Kind**: static method of <code>[AppCtrl](#AppCtrl)</code>  
<a name="NetworkService"></a>

## NetworkService
Service in charge of handling network errors.

**Kind**: global variable  
**Ngdoc**: service  

* [NetworkService](#NetworkService)
    * [.popup()](#NetworkService.popup)
    * [.check(status)](#NetworkService.check) ⇒ <code>String</code>

<a name="NetworkService.popup"></a>

### NetworkService.popup()
Method to be called when user is offline.

**Kind**: static method of <code>[NetworkService](#NetworkService)</code>  
<a name="NetworkService.check"></a>

### NetworkService.check(status) ⇒ <code>String</code>
Method that check a request's status and calls [popup](#NetworkService.popup) if user is offline.

**Kind**: static method of <code>[NetworkService](#NetworkService)</code>  
**Returns**: <code>String</code> - 'fail' if the user if offline, and 'success' if not.  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>Number</code> | A request's status. |

<a name="StudentService"></a>

## StudentService
Service in charge of making requests to the API.

**Kind**: global variable  
**Ngdoc**: service  

* [StudentService](#StudentService)
    * [.attachDate](#StudentService.attachDate) ⇒ <code>Object</code>
    * [.getDate()](#StudentService.getDate)

<a name="StudentService.attachDate"></a>

### StudentService.attachDate ⇒ <code>Object</code>
Method used to attach the current date to any data passed in. It's used by the [StudentService](studentaccess.service:StudentService).You may be prone to typo's with the properties of the returned object.

**Kind**: static property of <code>[StudentService](#StudentService)</code>  
**Returns**: <code>Object</code> - with date property of [$rootScope.date]($rootScope.date) and a data property with the data passed.  

| Param | Type | Description |
| --- | --- | --- |
| Takes | <code>Array</code> &#124; <code>Object</code> &#124; <code>String</code> | any data, but it's usually a JSON object received from the API. |

<a name="StudentService.getDate"></a>

### StudentService.getDate()
Helper funtion. Creates a new Date, filters it through angular's date filter, and stores the value in $rootScope.date.Function is called on [StudentService](#StudentService) load.

**Kind**: static method of <code>[StudentService](#StudentService)</code>  
**See**: $rootScope.date  
<a name="UpdateService"></a>

## UpdateService
Service in charge of determining if data is still valid.

**Kind**: global variable  
**Ngdoc**: service  

* [UpdateService](#UpdateService)
    * [.studentPic()](#UpdateService.studentPic) ⇒ <code>Promise</code>
    * [.anything(storageKey, mode)](#UpdateService.anything) ⇒ <code>Promise</code>

<a name="UpdateService.studentPic"></a>

### UpdateService.studentPic() ⇒ <code>Promise</code>
Method which determines if the stored studentPic is still valid. A picture is valid for a month.

**Kind**: static method of <code>[UpdateService](#UpdateService)</code>  
**Returns**: <code>Promise</code> - Returns a promise that resolves if the picture is undef or not valid and rejects if the picture is still valid.  
**Example**  
```js
UpdateService.studentPic().then(function(){
				//request picture, it is undefined or no longer valid
			}, function(){
				//use already stored picture, it's still valid
			});
```
<a name="UpdateService.anything"></a>

### UpdateService.anything(storageKey, mode) ⇒ <code>Promise</code>
Method which determines if some specific info is still valid according to the specified 'mode'. DO NOT use this method to check whether the student's picture is valid., use UpdateService.studentPic instead.

**Kind**: static method of <code>[UpdateService](#UpdateService)</code>  
**Returns**: <code>Promise</code> - Returns a promise that resolves if the data is undef or not valid and rejects if the data is still valid according to the defined 'mode'.  

| Param | Type | Description |
| --- | --- | --- |
| storageKey | <code>String</code> | The key in localStorage to check. |
| mode | <code>String</code> | There are two 'modes': 'month' which counts the data as valid for a month, and 'day' which counts data as valid for a day. Use 'month' for long term data that usually doesn't change, e.g.: teacher pictures, teacher info, staff information, etc. Use 'day' for data that needs to be kept up to date, e.g.: missing homeworks, grades, etc. |

**Example**  
```js
UpdateService.anything('STUDENT_MISSING','day').then(function(){
				//request data, it is undefined or no longer valid
			}, function(){
				//use already stored data, it's still valid
			});
```
