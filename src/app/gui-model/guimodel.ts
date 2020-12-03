export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Larisas Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",//Auswahlmöglichkeiten bei new Friend
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {   "id": "nickname", 
                            "type": "text", 
                            "name": "Nickname", 
                            "width": 2, 
                            "required": true 
                        },
                        {   "id": "group", 
                            "type": "autocomplete", 
                            "name": "Group",
                            "url": "/group", 
                            "form": "GroupForm", 
                            "width": 2 
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",//Auswahlmöglichkeiten bei new Location
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },
                        {
                         "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                    ]
                },
                {   "id": "GroupForm", 
                    "title": "Group", //Auswahlmöglichkeiten bei new Group
                    "url": "/group", 
                    "formFieldList": [ 
                        { 
                            "id": "name", 
                            "type": "text", 
                            "name": "GroupName", 
                            "width": 2, 
                            "required": true 
                        }, 
                        { 
                            "type": "deleteButton", 
                            "name": "Delete" 
                        }, 
                        { 
                            "type": "cancelButton", 
                            "name": "Cancel" 
                        }, 
                        { 
                            "type": "okButton", 
                            "name": "Ok" 
                        },
                        {
                            "id": "creationdate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                    ] 
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                        {   "id": "group", 
                            "type": "autocomplete", 
                            "name": "Group",
                            "url": "/group", 
                            "form": "GroupForm", 
                            "width": 2 },
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",//Friend-Button im Main Menu
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",//Location-Button im Main Menu
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {   "type": "button", 
                            "name": "Groups", //Groups-Button im Main Menu
                            "icon": "fa-weixin", 
                            "color": "wisteria", 
                            "page": "groupspage", 
                        },
                    ]
                },

                 {
                    "id": "friendspage",//nach Klick auf Friend 
                    "elementList": [
                        {
                            "type": "backbutton",//erscheint Back-Button 
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",//erscheint New Friend-Button
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",//erstellte Firends werden so dargestellt
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "friendpage",//Verbindung, nächsten Klick verbinden, neue Page erstellen
                        },
                    ]
                },
                {
                    "id": "friendpage",//nach Klick auf Friend aus der Liste
                    "elementList": [
                        {
                            "type": "backbutton",//erscheint Back-Button 
                        },
                        {
                            "type": "button",
                            "name": "EditFriend",//erscheint Edit Friend-Button
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                              {
                            "type": "button",
                            "name": "AddActivity",//erscheint Add Activity-Button
                            "icon": "fa-calendar-alt",
                            "color": "green",
                            "form": {
                                "form": "AddActivityForm"//Angaben zu Activity anpassen können
                            }
                        },
                        {
                            "type": "list",//erstellte Firends werden so dargestellt
                            "icon": "fa-calendar-alt",
                            "color": "pumpkin",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    
                    ]
                },
                         { "id": "groupspage", 
                            "elementList": [ 
                                { 
                                    "type": "backbutton", 
                                }, 
                                { 
                                    "type": "newButton", 
                                    "name": "NewGroup", 
                                    "icon": "fa-weixin", 
                                    "color": "green", 
                                    "form": { 
                                        "form": "GroupForm" 
                                    } 
                                },
                              
                                { 
                                    "type":"list",
                                    "icon":"fa-weixin",
                                    "color": "wisteria",
                                    "search": true,
                                    "url": "/group",
                                    "form": { 
                                        "form": "GroupForm" 
                                    } 
                                }  
                            ] 
                        },   
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
