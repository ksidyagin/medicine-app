"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PatientProfileModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var patient_profile_component_1 = require("./patient-profile.component");
var patient_profile_routing_module_1 = require("./patient-profile-routing.module");
var autocomplete_1 = require("primeng/autocomplete");
var calendar_1 = require("primeng/calendar");
var carousel_1 = require("primeng/carousel");
var button_1 = require("primeng/button");
var toast_1 = require("primeng/toast");
var slider_1 = require("primeng/slider");
var inputtext_1 = require("primeng/inputtext");
var orderlist_1 = require("primeng/orderlist");
var dropdown_1 = require("primeng/dropdown");
var inputtextarea_1 = require("primeng/inputtextarea");
var accordion_1 = require("primeng/accordion");
var forms_1 = require("@angular/forms");
var selectbutton_1 = require("primeng/selectbutton");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var patient_component_1 = require("./patient/patient.component");
var questionnaires_component_1 = require("./questionnaires/questionnaires.component");
var observation_component_1 = require("./observation/observation.component");
var patient_database_component_1 = require("./patient-database/patient-database.component");
var write_recipe_component_1 = require("./write-recipe/write-recipe.component");
var PatientProfileModule = /** @class */ (function () {
    function PatientProfileModule() {
    }
    PatientProfileModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                patient_profile_routing_module_1.PatientProfileRoutingModule,
                calendar_1.CalendarModule,
                autocomplete_1.AutoCompleteModule,
                carousel_1.CarouselModule,
                button_1.ButtonModule,
                toast_1.ToastModule,
                slider_1.SliderModule,
                inputtext_1.InputTextModule,
                orderlist_1.OrderListModule,
                dropdown_1.DropdownModule,
                inputtextarea_1.InputTextareaModule,
                accordion_1.AccordionModule,
                forms_1.FormsModule,
                selectbutton_1.SelectButtonModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule
            ],
            declarations: [
                patient_profile_component_1.PatientProfileComponent,
                patient_component_1.PatientComponent,
                questionnaires_component_1.QuestionnairesComponent,
                observation_component_1.ObservationComponent,
                write_recipe_component_1.WriteRecipeComponent,
                patient_database_component_1.PatientDatabaseComponent
            ]
        })
    ], PatientProfileModule);
    return PatientProfileModule;
}());
exports.PatientProfileModule = PatientProfileModule;
