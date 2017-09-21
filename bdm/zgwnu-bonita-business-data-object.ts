// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBusinessDataInterface } from './zgwnu-bonita-business-data.interface'

export abstract class ZgwnuBonitaBusinessDataObject implements ZgwnuBonitaBusinessDataInterface {
  businessDataType: string

  constructor(businessDataType: string) {
    this.businessDataType = businessDataType
  }

  parseData(data: any)
  {
    if (data.persistenceId) this.persistenceId = data.persistenceId
    if (data.persistenceId_string) this.persistenceId_string = data.persistenceId_string
    if (data.persistenceVersion) this.persistenceVersion = data.persistenceVersion
    if (data.persistenceVersion_string) this.persistenceVersion_string = data.persistenceVersion_string
  }

  persistenceId: number;
  persistenceId_string: string;
  persistenceVersion: number;
  persistenceVersion_string: string;
  // other fields can be defined in child instances
}
