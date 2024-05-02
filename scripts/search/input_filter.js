import { majAppareils } from "./majAppareils.js";

export function inputFilter(value, appliances) {
  let aplliancesFiltred = majAppareils.myAppliancesArray;

  console.log(aplliancesFiltred);

  const inputValueFilterAppliance = document
    .getElementById("searchAppliance")
    .value.toLowerCase();

  console.log(inputValueFilterAppliance);

  if (inputValueFilterAppliance.value.length >= 1) {
    aplliancesFiltred = appliances.filter((appliance) =>
      appliance.toLowerCase().match(new RegExp(value, "i"))
    );
    // const appliancesFilterByInput = majAppareils(
    //   inputValueFilterAppliance,
    //   aplliancesFiltred
    // );
  }
  return aplliancesFiltred;
}
