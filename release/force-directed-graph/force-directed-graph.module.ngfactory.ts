/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../src/force-directed-graph/force-directed-graph.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../../../src/common/axes/axes.module';
import * as import4 from '../../../src/common/tooltip/tooltip.module';
import * as import5 from '../../../src/common/chart-common.module';
import * as import6 from '@angular/common/src/localization';
import * as import7 from '../../../src/services/injection.service';
import * as import8 from '../../../src/common/tooltip/tooltip.service';
import * as import9 from '@angular/common/src/location/path_location_strategy';
import * as import10 from '@angular/common/src/location/location';
import * as import11 from '@angular/core/src/di/injector';
import * as import12 from '../common/tooltip/tooltip.component.ngfactory';
import * as import13 from '@angular/core/src/i18n/tokens';
import * as import14 from '@angular/core/src/application_ref';
import * as import15 from '@angular/common/src/location/platform_location';
import * as import16 from '@angular/common/src/location/location_strategy';
class ForceDirectedGraphModuleInjector extends import0.NgModuleInjector<import1.ForceDirectedGraphModule> {
  _CommonModule_0:import2.CommonModule;
  _AxesModule_1:import3.AxesModule;
  _TooltipModule_2:import4.TooltipModule;
  _ChartCommonModule_3:import5.ChartCommonModule;
  _ForceDirectedGraphModule_4:import1.ForceDirectedGraphModule;
  __NgLocalization_5:import6.NgLocaleLocalization;
  __InjectionService_6:import7.InjectionService;
  __TooltipService_7:import8.TooltipService;
  __LocationStrategy_8:import9.PathLocationStrategy;
  __Location_9:import10.Location;
  constructor(parent:import11.Injector) {
    super(parent,[import12.TooltipContentComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_5():import6.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == null)) { (this.__NgLocalization_5 = new import6.NgLocaleLocalization(this.parent.get(import13.LOCALE_ID))); }
    return this.__NgLocalization_5;
  }
  get _InjectionService_6():import7.InjectionService {
    if ((this.__InjectionService_6 == null)) { (this.__InjectionService_6 = new import7.InjectionService(this.parent.get(import14.ApplicationRef),this,this)); }
    return this.__InjectionService_6;
  }
  get _TooltipService_7():import8.TooltipService {
    if ((this.__TooltipService_7 == null)) { (this.__TooltipService_7 = new import8.TooltipService(this._InjectionService_6)); }
    return this.__TooltipService_7;
  }
  get _LocationStrategy_8():import9.PathLocationStrategy {
    if ((this.__LocationStrategy_8 == null)) { (this.__LocationStrategy_8 = new import9.PathLocationStrategy(this.parent.get(import15.PlatformLocation),this.parent.get(import16.APP_BASE_HREF,(null as any)))); }
    return this.__LocationStrategy_8;
  }
  get _Location_9():import10.Location {
    if ((this.__Location_9 == null)) { (this.__Location_9 = new import10.Location(this._LocationStrategy_8)); }
    return this.__Location_9;
  }
  createInternal():import1.ForceDirectedGraphModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._AxesModule_1 = new import3.AxesModule();
    this._TooltipModule_2 = new import4.TooltipModule();
    this._ChartCommonModule_3 = new import5.ChartCommonModule();
    this._ForceDirectedGraphModule_4 = new import1.ForceDirectedGraphModule();
    return this._ForceDirectedGraphModule_4;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.AxesModule)) { return this._AxesModule_1; }
    if ((token === import4.TooltipModule)) { return this._TooltipModule_2; }
    if ((token === import5.ChartCommonModule)) { return this._ChartCommonModule_3; }
    if ((token === import1.ForceDirectedGraphModule)) { return this._ForceDirectedGraphModule_4; }
    if ((token === import6.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import7.InjectionService)) { return this._InjectionService_6; }
    if ((token === import8.TooltipService)) { return this._TooltipService_7; }
    if ((token === import16.LocationStrategy)) { return this._LocationStrategy_8; }
    if ((token === import10.Location)) { return this._Location_9; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ForceDirectedGraphModuleNgFactory:import0.NgModuleFactory<import1.ForceDirectedGraphModule> = new import0.NgModuleFactory(ForceDirectedGraphModuleInjector,import1.ForceDirectedGraphModule);