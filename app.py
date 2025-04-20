# # from flask import Flask, jsonify, request
# # from flask_cors import CORS
# # from azure.identity import DefaultAzureCredential
# # from azure.mgmt.resource import ResourceManagementClient
# # from azure.mgmt.storage import StorageManagementClient
# # from azure.mgmt.compute import ComputeManagementClient
# # from azure.mgmt.monitor import MonitorManagementClient
# # from azure.mgmt.recoveryservices import RecoveryServicesClient
# # from azure.mgmt.recoveryservicesbackup import RecoveryServicesBackupClient
# # import requests

# # app = Flask(__name__)
# # CORS(app)

# # # Azure SDK Clients
# # credential = DefaultAzureCredential()
# # subscription_id = "334c9d58-6fa7-4e95-b527-06364ee7cec8"  # Replace with your actual subscription ID

# # resource_client = ResourceManagementClient(credential, subscription_id)
# # storage_client = StorageManagementClient(credential, subscription_id)
# # compute_client = ComputeManagementClient(credential, subscription_id)
# # monitor_client = MonitorManagementClient(credential, subscription_id)
# # recovery_client = RecoveryServicesClient(credential, subscription_id)
# # backup_client = RecoveryServicesBackupClient(credential, subscription_id)
# # # Azure DevOps PAT token and API URL
# # devops_pat = "EvfWWBmfcFUC3wFxKUDaihqc4ZdE8iJ8xijvhK0uR9aJ3ELYPPoGJQQJ99BDACAAAAAAAAAAAAASAZDO1aJf"  # Replace with your Azure DevOps PAT
# # organization_name = "1Azure-Dashboard"  # Replace with your Azure DevOps Organization name
# # project_name = "Azure-Dashboard"  # Replace with your Azure DevOps Project name


# # pipeline_ids = {
# #     "StorageAccounts": "STORAGE_PIPELINE_ID",      # Replace with actual pipeline ID
# #     "VirtualMachines": "VM_PIPELINE_ID",           # Replace with actual pipeline ID
# #     "RecoveryVaults": "RECOVERY_VAULT_PIPELINE_ID" # Replace with actual pipeline ID
# # }

# # def trigger_pipeline_by_type(resource_type):
# #     pipeline_id = pipeline_ids.get(resource_type)
# #     if not pipeline_id:
# #         raise ValueError(f"No pipeline configured for resource type: {resource_type}")
    
# #     url = f"https://dev.azure.com/{organization_name}/{project_name}/_apis/build/builds?api-version=6.0"
# #     headers = {
# #         'Content-Type': 'application/json',
# #         'Authorization': f'Basic {devops_pat}',
# #     }
# #     data = {
# #         "definition": {
# #             "id": pipeline_id
# #         },
# #         "reason": "manual"
# #     }
# #     response = requests.post(url, json=data, headers=headers)
# #     if response.status_code == 200:
# #         return "Pipeline triggered successfully!"
# #     else:
# #         raise Exception(f"Failed to trigger pipeline: {response.status_code}, {response.text}")


# # def get_diagnostic_settings(monitor_client, resource_id):
# #     try:
# #         settings = list(monitor_client.diagnostic_settings.list(resource_id))
# #         return [s.as_dict() for s in settings] if settings else None
# #     except Exception:
# #         return None

# # def has_private_endpoint(storage_client, rg, name):
# #     try:
# #         pe_list = storage_client.private_endpoint_connections.list(rg, name)
# #         return any(pe.connection_state.status.lower() == 'approved' for pe in pe_list)
# #     except Exception:
# #         return False

# # def is_vm_backed_up(backup_client, rg_name, vault_name, vm_id):
# #     try:
# #         container_list = backup_client.backup_protected_items.list(vault_name, rg_name, filter="backupManagementType eq 'AzureIaasVM'")
# #         for item in container_list:
# #             if vm_id.lower() in item.properties.source_resource_id.lower():
# #                 return True
# #         return False
# #     except Exception:
# #         return False

# # def is_fileshare_protected(backup_client, rg_name, vault_name):
# #     try:
# #         items = backup_client.backup_protected_items.list(vault_name, rg_name, filter="workloadType eq 'AzureFileShare'")
# #         return len(list(items)) > 0
# #     except Exception:
# #         return False

# # # Optimization Functions

# # def optimize_storage_account(storage_client, rg_name, sa_name):
# #     # Example: Update to correct TLS version if not 1.2
# #     sa = storage_client.storage_accounts.get_properties(rg_name, sa_name)
# #     if sa.minimum_tls_version != "1.2":
# #         storage_client.storage_accounts.update(rg_name, sa_name, {"minimum_tls_version": "1.2"})
    
# #     # Example: Update redundancy to LRS if not LRS
# #     if sa.sku.name != "Standard_LRS":
# #         storage_client.storage_accounts.update(rg_name, sa_name, {"sku": {"name": "Standard_LRS"}})

# #     # Enable private endpoint if missing
# #     if not has_private_endpoint(storage_client, rg_name, sa_name):
# #         # Logic to enable private endpoint (e.g., using Azure private endpoint APIs)

# #         return True  # Return True if optimization was done

# # def optimize_virtual_machine(compute_client, rg_name, vm_name):
# #     # Example: Update VM size (simplified)
# #     vm = compute_client.virtual_machines.get(rg_name, vm_name)
# #     if vm.hardware_profile.vm_size != 'Standard_DS3_v2':  # Example optimization
# #         vm.hardware_profile.vm_size = 'Standard_DS3_v2'
# #         compute_client.virtual_machines.create_or_update(rg_name, vm_name, vm)

# #     # Enable backup if not enabled
# #     for vault in recovery_client.vaults.list_by_resource_group(rg_name):
# #         if not is_vm_backed_up(backup_client, rg_name, vault.name, vm.id):
# #             # Logic to enable backup for the VM (simplified)
# #             pass

# #     return True

# # def optimize_recovery_vault(recovery_client, backup_client, rg_name, vault_name):
# #     # Enable fileshare protection if missing
# #     if not is_fileshare_protected(backup_client, rg_name, vault_name):
# #         # Logic to enable file share protection in the vault
# #         pass

# #     # Update backup redundancy to LRS if not LRS
# #     vault = recovery_client.vaults.get(rg_name, vault_name)
# #     if vault.sku.name != 'Standard_LRS':
# #         recovery_client.vaults.update(rg_name, vault_name, {'sku': {'name': 'Standard_LRS'}})

# #     # Disable public access if not disabled
# #     if not vault.properties.public_access_disabled:
# #         recovery_client.vaults.update(rg_name, vault_name, {'properties': {'public_access_disabled': True}})

# #     # Ensure private endpoint is enabled
# #     if not vault.properties.private_endpoint_connections:
# #         # Logic to enable private endpoints (simplified)
# #         pass

# #     return True

# # @app.route('/api/resources', methods=['GET'])
# # def get_resources():
# #     result = {'StorageAccounts': [], 'VirtualMachines': [], 'RecoveryVaults': []}

# #     try:
# #         for rg in resource_client.resource_groups.list():
# #             rg_name = rg.name

# #             # Fetch Storage Accounts
# #             for sa in storage_client.storage_accounts.list_by_resource_group(rg_name):
# #                 props = storage_client.storage_accounts.get_properties(rg_name, sa.name)
# #                 result['StorageAccounts'].append({
# #                     "name": sa.name,
# #                     "resourceGroup": rg_name,
# #                     "location": sa.location,
# #                     "tls_version": props.minimum_tls_version,
# #                     "redundancy": props.sku.name,
# #                     "shared_key_access": props.allow_shared_key_access,
# #                     "blob_public_access": props.allow_blob_public_access,
# #                     "public_access_disabled": not props.allow_blob_public_access if props.allow_blob_public_access is not None else "Unknown",
# #                     "soft_delete": "Not Available in SDK",
# #                     "tier": props.access_tier if props.access_tier else "N/A",
# #                     "diagnostic_setting": get_diagnostic_settings(monitor_client, props.id),
# #                     "private_endpoint": has_private_endpoint(storage_client, rg_name, sa.name)
# #                 })

# #             # Fetch Virtual Machines
# #             for vm in compute_client.virtual_machines.list(rg_name):
# #                 vm_info = compute_client.virtual_machines.get(rg_name, vm.name, expand="instanceView")
# #                 result['VirtualMachines'].append({
# #                     "name": vm.name,
# #                     "resourceGroup": rg_name,
# #                     "location": vm.location,
# #                     "size": vm_info.hardware_profile.vm_size if vm_info.hardware_profile else "Unknown",
# #                     "diagnostic_setting": get_diagnostic_settings(monitor_client, vm.id),
# #                     "disk_backup_enabled": any(
# #                         is_vm_backed_up(backup_client, rg_name, vault.name, vm.id)
# #                         for vault in recovery_client.vaults.list_by_resource_group(rg_name)
# #                     )
# #                 })

# #             # Fetch Recovery Services Vaults
# #             for vault in recovery_client.vaults.list_by_resource_group(rg_name):
# #                 vault_props = recovery_client.vaults.get(rg_name, vault.name)

# #                 private_endpoints = getattr(vault_props, 'private_endpoint_connections', [])
# #                 private_endpoints_enabled = any(pe.connection_state.status.lower() == 'approved' for pe in private_endpoints)
# #                 public_access_disabled = private_endpoints_enabled

# #                 result['RecoveryVaults'].append({
# #                     "name": vault.name,
# #                     "resourceGroup": rg_name,
# #                     "location": vault.location,
# #                     "diagnostic_setting": get_diagnostic_settings(monitor_client, vault.id),
# #                     "backup_redundancy": vault_props.sku.name,
# #                     "private_endpoints_enabled": private_endpoints_enabled,
# #                     "public_access_disabled": public_access_disabled,
# #                     "fileshare_protection_enabled": is_fileshare_protected(backup_client, rg_name, vault.name)
# #                 })

# #         return jsonify(result)

# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500


# # @app.route('/api/optimize-property', methods=['POST'])
# # def optimize_property():
# #     data = request.get_json()
# #     resource_type = data.get("resource_type")
# #     resource_name = data.get("resource_name")
# #     resource_group = data.get("resource_group")

# #     try:
# #         if resource_type == "StorageAccounts":
# #             optimize_storage_account(storage_client, resource_group, resource_name)
# #         elif resource_type == "VirtualMachines":
# #             optimize_virtual_machine(compute_client, resource_group, resource_name)
# #         elif resource_type == "RecoveryVaults":
# #             optimize_recovery_vault(recovery_client, backup_client, resource_group, resource_name)
# #         return jsonify({"message": f"{resource_name} optimized successfully!"})

# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500


# # @app.route('/api/optimize-resource', methods=['POST'])
# # def optimize_resource():
# #     data = request.get_json()
# #     resource_type = data.get("resource_type")
# #     resource_name = data.get("resource_name")
# #     resource_group = data.get("resource_group")

# #     try:
# #         if resource_type == "StorageAccounts":
# #             optimize_storage_account(storage_client, resource_group, resource_name)
# #         elif resource_type == "VirtualMachines":
# #             optimize_virtual_machine(compute_client, resource_group, resource_name)
# #         elif resource_type == "RecoveryVaults":
# #             optimize_recovery_vault(recovery_client, backup_client, resource_group, resource_name)
# #         return jsonify({"message": f"{resource_name} optimized successfully!"})

# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/trigger-pipeline', methods=['POST'])
# # def trigger_pipeline():
# #     try:
# #         message = trigger_azure_devops_pipeline()
# #         return jsonify({"message": message})
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500


# # if __name__ == '__main__':
# #     app.run(debug=True)


# # from flask import Flask, jsonify, request
# # from flask_cors import CORS
# # from azure.identity import DefaultAzureCredential
# # from azure.mgmt.resource import ResourceManagementClient
# # from azure.mgmt.storage import StorageManagementClient
# # from azure.mgmt.compute import ComputeManagementClient
# # from azure.mgmt.monitor import MonitorManagementClient
# # from azure.mgmt.recoveryservices import RecoveryServicesClient
# # from azure.mgmt.recoveryservicesbackup import RecoveryServicesBackupClient
# # import requests
# # import base64

# # app = Flask(__name__)
# # CORS(app)

# # # Azure SDK Clients
# # credential = DefaultAzureCredential()
# # subscription_id = "334c9d58-6fa7-4e95-b527-06364ee7cec8"  # Replace with your actual subscription ID

# # resource_client = ResourceManagementClient(credential, subscription_id)
# # storage_client = StorageManagementClient(credential, subscription_id)
# # compute_client = ComputeManagementClient(credential, subscription_id)
# # monitor_client = MonitorManagementClient(credential, subscription_id)
# # recovery_client = RecoveryServicesClient(credential, subscription_id)
# # backup_client = RecoveryServicesBackupClient(credential, subscription_id)

# # # Azure DevOps configuration
# # pat = "EvfWWBmfcFUC3wFxKUDaihqc4ZdE8iJ8xijvhK0uR9aJ3ELYPPoGJQQJ99BDACAAAAAAAAAAAAASAZDO1aJf"  # Replace with your Azure DevOps PAT
# # encoded_pat = base64.b64encode(f':{pat}'.encode()).decode()

# # organization_name = "1Azure-Dashboard"  # Replace with your Azure DevOps Organization name
# # project_name = "Azure-Dashboard"  # Replace with your Azure DevOps Project name

# # # Replace with actual pipeline IDs for each resource type
# # #AZURE_DEVOPS_PIPELINE_URL = 'https://dev.azure.com/{organization}/{project}/_apis/pipelines/{pipeline_id}/runs?api-version=6.0-preview.1'

# # def trigger_pipeline_logic(pipeline_variables):
# #     # Azure DevOps organization, project, and pipeline details
# #     organization = "1Azure-Dashboard"  # Replace with your Azure DevOps organization name
# #     project = "Azure-Dashboard"  # Replace with your Azure DevOps project name
# #     pipeline_id = "https://dev.azure.com/1Azure-Dashboard/Azure-Dashboard/_build?definitionId=1"  # Replace with the pipeline ID to trigger
# #     devops_url = f'https://dev.azure.com/{organization}/{project}/_apis/pipelines/{pipeline_id}/runs?api-version=6.0-preview.1'

# #     # Headers for Azure DevOps authentication (replace with your personal access token)
# #     headers = {
# #         'Content-Type': 'application/json',
# #         'Authorization': 'Basic {}'.format('your_personal_access_token'),  # Replace with your actual PAT token
# #     }

# #     # Payload to trigger the pipeline (passing pipeline variables)
# #     payload = {
# #         "variables": pipeline_variables
# #     }

# #     # Trigger the pipeline using a POST request
# #     try:
# #         response = requests.post(devops_url, json=payload, headers=headers)
# #         response.raise_for_status()  # Raise an exception for HTTP errors
# #         return response.json()  # Return the response from the API
# #     except requests.exceptions.RequestException as e:
# #         print(f"Error triggering pipeline: {e}")
# #         return {"error": "Failed to trigger pipeline"}

# # def get_diagnostic_settings(credential, subscription_id, resource_id):
# #     monitor_client = MonitorManagementClient(credential, subscription_id)
# #     try:
# #         settings = monitor_client.diagnostic_settings.list(resource_id)
# #         return any(True for _ in settings)  # Returns True if there's at least one setting
# #     except Exception as e:
# #         print(f"Error fetching diagnostic settings for {resource_id}: {e}")
# #         return False

# # @app.route('/api/resources', methods=['GET'])
# # def get_resources():
# #     result = {'StorageAccounts': [], 'VirtualMachines': [], 'RecoveryVaults': []}

# #     try:
# #         for rg in resource_client.resource_groups.list():
# #             rg_name = rg.name

# #             # Storage Accounts
# #             for sa in storage_client.storage_accounts.list_by_resource_group(rg_name):
# #                 props = storage_client.storage_accounts.get_properties(rg_name, sa.name)
# #                 result['StorageAccounts'].append({
# #                     "name": sa.name,
# #                     "resourceGroup": rg_name,
# #                     "location": sa.location,
# #                     "tls_version": props.minimum_tls_version,
# #                     "redundancy": props.sku.name,
# #                     "shared_key_access": props.allow_shared_key_access,
# #                     "blob_public_access": props.allow_blob_public_access,
# #                     "public_access_disabled": not props.allow_blob_public_access if props.allow_blob_public_access is not None else "Unknown",
# #                     "soft_delete": "Not Available in SDK",
# #                     "tier": props.access_tier if props.access_tier else "N/A",
# #                     "diagnostic_setting": get_diagnostic_settings(monitor_client, props.id),
# #                     "private_endpoint": has_private_endpoint(storage_client, rg_name, sa.name)
# #                 })

# #             # Virtual Machines
# #             for vm in compute_client.virtual_machines.list(rg_name):
# #                 vm_info = compute_client.virtual_machines.get(rg_name, vm.name, expand="instanceView")
# #                 result['VirtualMachines'].append({
# #                     "name": vm.name,
# #                     "resourceGroup": rg_name,
# #                     "location": vm.location,
# #                     "size": vm_info.hardware_profile.vm_size if vm_info.hardware_profile else "Unknown",
# #                     "diagnostic_setting": get_diagnostic_settings(monitor_client, vm.id),
# #                     "disk_backup_enabled": any(
# #                         is_vm_backed_up(backup_client, rg_name, vault.name, vm.id)
# #                         for vault in recovery_client.vaults.list_by_resource_group(rg_name)
# #                     )
# #                 })

# #             # Recovery Vaults
# #             for vault in recovery_client.vaults.list_by_resource_group(rg_name):
# #                 vault_props = recovery_client.vaults.get(rg_name, vault.name)

# #                 private_endpoints = getattr(vault_props, 'private_endpoint_connections', [])
# #                 private_endpoints_enabled = any(pe.connection_state.status.lower() == 'approved' for pe in private_endpoints)
# #                 public_access_disabled = private_endpoints_enabled

# #                 result['RecoveryVaults'].append({
# #                     "name": vault.name,
# #                     "resourceGroup": rg_name,
# #                     "location": vault.location,
# #                     "diagnostic_setting": get_diagnostic_settings(monitor_client, vault.id),
# #                     "backup_redundancy": vault_props.sku.name,
# #                     "private_endpoints_enabled": private_endpoints_enabled,
# #                     "public_access_disabled": public_access_disabled,
# #                     "fileshare_protection_enabled": is_fileshare_protected(backup_client, rg_name, vault.name)
# #                 })

# #         return jsonify(result)

# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/trigger-pipeline', methods=['POST'])
# # def trigger_pipeline():
# #     # Extract the data from the request
# #     data = request.get_json()
    
# #     # Extract variables from the request payload
# #     resource_type = data.get('type')
# #     resource_name = data.get('name')
# #     resource_group = data.get('resourceGroup')
# #     optimize_property = data.get('property', None)  # Can be None if optimizing all properties
# #     optimize_all = data.get('optimizeAll', False)  # Flag for optimizing the entire resource
    
# #     # Prepare pipeline variables
# #     pipeline_variables = {
# #         "ResourceGroup": resource_group,
# #         "ResourceName": resource_name,
# #         "ResourceType": resource_type,
# #         "OptimizeProperty": optimize_property,  # Specific property to optimize (or None for optimize all)
# #         "OptimizeAll": optimize_all  # Flag to indicate if all properties need optimization
# #     }

# #     try:
# #         # Call the function to trigger the pipeline (here it triggers based on the passed parameters)
# #         result = trigger_pipeline_logic(pipeline_variables)
# #         return jsonify(result)
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True)


# from flask import Flask, jsonify, request
# from flask_cors import CORS
# from azure.identity import DefaultAzureCredential
# from azure.mgmt.resource import ResourceManagementClient
# from azure.mgmt.storage import StorageManagementClient
# from azure.mgmt.compute import ComputeManagementClient
# from azure.mgmt.monitor import MonitorManagementClient
# from azure.mgmt.recoveryservices import RecoveryServicesClient
# from azure.mgmt.recoveryservicesbackup import RecoveryServicesBackupClient
# import requests
# import base64

# app = Flask(__name__)
# CORS(app)

# # Azure SDK Clients
# credential = DefaultAzureCredential()
# subscription_id = "334c9d58-6fa7-4e95-b527-06364ee7cec8"  # Replace with your actual subscription ID

# resource_client = ResourceManagementClient(credential, subscription_id)
# storage_client = StorageManagementClient(credential, subscription_id)
# compute_client = ComputeManagementClient(credential, subscription_id)
# monitor_client = MonitorManagementClient(credential, subscription_id)
# recovery_client = RecoveryServicesClient(credential, subscription_id)
# backup_client = RecoveryServicesBackupClient(credential, subscription_id)

# # Azure DevOps configuration
# pat = "EvfWWBmfcFUC3wFxKUDaihqc4ZdE8iJ8xijvhK0uR9aJ3ELYPPoGJQQJ99BDACAAAAAAAAAAAAASAZDO1aJf"  # Replace with your Azure DevOps PAT
# encoded_pat = base64.b64encode(f':{pat}'.encode()).decode()

# organization_name = "1Azure-Dashboard"  # Replace with your Azure DevOps Organization name
# project_name = "Azure-Dashboard"  # Replace with your Azure DevOps Project name

# def trigger_pipeline_logic(pipeline_variables):
#     # Azure DevOps organization, project, and pipeline details
#     organization = "1Azure-Dashboard"  # Replace with your Azure DevOps organization name
#     project = "Azure-Dashboard"  # Replace with your Azure DevOps project name
#     pipeline_id = "https://dev.azure.com/1Azure-Dashboard/Azure-Dashboard/_build?definitionId=1"  # Replace with the pipeline ID to trigger
#     devops_url = f'https://dev.azure.com/{organization}/{project}/_apis/pipelines/{pipeline_id}/runs?api-version=6.0-preview.1'

#     # Headers for Azure DevOps authentication (replace with your personal access token)
#     headers = {
#         'Content-Type': 'application/json',
#         'Authorization': f'Basic {encoded_pat}',
#     }

#     # Payload to trigger the pipeline (passing pipeline variables)
#     payload = {
#         "variables": pipeline_variables
#     }

#     # Trigger the pipeline using a POST request
#     try:
#         response = requests.post(devops_url, json=payload, headers=headers)
#         response.raise_for_status()  # Raise an exception for HTTP errors
#         return response.json()  # Return the response from the API
#     except requests.exceptions.RequestException as e:
#         print(f"Error triggering pipeline: {e}")
#         return {"error": "Failed to trigger pipeline"}

# def get_diagnostic_settings(credential, subscription_id, resource_id):
#     monitor_client = MonitorManagementClient(credential, subscription_id)
#     try:
#         settings = monitor_client.diagnostic_settings.list(resource_id)
#         return any(True for _ in settings)  # Returns True if there's at least one setting
#     except Exception as e:
#         print(f"Error fetching diagnostic settings for {resource_id}: {e}")
#         return False

# @app.route('/api/resources', methods=['GET'])
# def get_resources():
#     result = {'StorageAccounts': [], 'VirtualMachines': [], 'RecoveryVaults': []}

#     try:
#         for rg in resource_client.resource_groups.list():
#             rg_name = rg.name

#             # Storage Accounts
#             for sa in storage_client.storage_accounts.list_by_resource_group(rg_name):
#                 props = storage_client.storage_accounts.get_properties(rg_name, sa.name)
#                 result['StorageAccounts'].append({
#                     "name": sa.name,
#                     "resourceGroup": rg_name,
#                     "location": sa.location,
#                     "tls_version": props.minimum_tls_version,
#                     "redundancy": props.sku.name,
#                     "shared_key_access": props.allow_shared_key_access,
#                     "blob_public_access": props.allow_blob_public_access,
#                     "public_access_disabled": not props.allow_blob_public_access if props.allow_blob_public_access is not None else "Unknown",
#                     "soft_delete": "Not Available in SDK",
#                     "tier": props.access_tier if props.access_tier else "N/A",
#                     "diagnostic_setting": get_diagnostic_settings(monitor_client, props.id),
#                     "private_endpoint": has_private_endpoint(storage_client, rg_name, sa.name)
#                 })

#             # Virtual Machines
#             for vm in compute_client.virtual_machines.list(rg_name):
#                 vm_info = compute_client.virtual_machines.get(rg_name, vm.name, expand="instanceView")
#                 result['VirtualMachines'].append({
#                     "name": vm.name,
#                     "resourceGroup": rg_name,
#                     "location": vm.location,
#                     "size": vm_info.hardware_profile.vm_size if vm_info.hardware_profile else "Unknown",
#                     "diagnostic_setting": get_diagnostic_settings(monitor_client, vm.id),
#                     "disk_backup_enabled": any(
#                         is_vm_backed_up(backup_client, rg_name, vault.name, vm.id)
#                         for vault in recovery_client.vaults.list_by_resource_group(rg_name)
#                     )
#                 })

#             # Recovery Vaults
#             for vault in recovery_client.vaults.list_by_resource_group(rg_name):
#                 vault_props = recovery_client.vaults.get(rg_name, vault.name)

#                 private_endpoints = getattr(vault_props, 'private_endpoint_connections', [])
#                 private_endpoints_enabled = any(pe.connection_state.status.lower() == 'approved' for pe in private_endpoints)
#                 public_access_disabled = private_endpoints_enabled

#                 result['RecoveryVaults'].append({
#                     "name": vault.name,
#                     "resourceGroup": rg_name,
#                     "location": vault.location,
#                     "diagnostic_setting": get_diagnostic_settings(monitor_client, vault.id),
#                     "backup_redundancy": vault_props.sku.name,
#                     "private_endpoints_enabled": private_endpoints_enabled,
#                     "public_access_disabled": public_access_disabled,
#                     "fileshare_protection_enabled": is_fileshare_protected(backup_client, rg_name, vault.name)
#                 })

#         return jsonify(result)

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/trigger-pipeline', methods=['POST'])
# def trigger_pipeline():
#     # Extract the data from the request
#     data = request.get_json()
    
#     # Extract variables from the request payload
#     resource_type = data.get('type')
#     resource_name = data.get('name')
#     resource_group = data.get('resourceGroup')
#     optimize_property = data.get('property', None)  # Can be None if optimizing all properties
#     optimize_all = data.get('optimizeAll', False)  # Flag for optimizing the entire resource
    
#     # Prepare pipeline variables
#     pipeline_variables = {
#         "ResourceGroup": resource_group,
#         "ResourceName": resource_name,
#         "ResourceType": resource_type,
#         "OptimizeProperty": optimize_property,  # Specific property to optimize (or None for optimize all)
#         "OptimizeAll": optimize_all  # Flag to indicate if all properties need optimization
#     }

#     try:
#         # Call the function to trigger the pipeline (here it triggers based on the passed parameters)
#         result = trigger_pipeline_logic(pipeline_variables)
#         return jsonify(result)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, jsonify, request
from flask_cors import CORS
from azure.identity import DefaultAzureCredential
from azure.mgmt.resource import ResourceManagementClient
from azure.mgmt.storage import StorageManagementClient
from azure.mgmt.compute import ComputeManagementClient
from azure.mgmt.recoveryservices import RecoveryServicesClient
from azure.mgmt.recoveryservicesbackup import RecoveryServicesBackupClient
from azure.mgmt.monitor import MonitorManagementClient
#from azure.mgmt.monitor.models import DiagnosticSettingsResource
import requests
import base64

app = Flask(__name__)
CORS(app)

# Azure SDK Clients
credential = DefaultAzureCredential()
subscription_id = "334c9d58-6fa7-4e95-b527-06364ee7cec8"  # Replace with your actual subscription ID

resource_client = ResourceManagementClient(credential, subscription_id)
storage_client = StorageManagementClient(credential, subscription_id)
compute_client = ComputeManagementClient(credential, subscription_id)
monitor_client = MonitorManagementClient(credential, subscription_id)
recovery_client = RecoveryServicesClient(credential, subscription_id)
backup_client = RecoveryServicesBackupClient(credential, subscription_id)

# Azure DevOps configuration
pat = "CWCvABUofooLznHdjEvH7OhxsLaGBdOh4orf5pYvyl633pH2y35TJQQJ99BDACAAAAAAAAAAAAASAZDO1bLw"  # Replace with your Azure DevOps PAT
encoded_pat = base64.b64encode(f':{pat}'.encode()).decode()

organization_name = "1Azure-Dashboard"  # Replace with your Azure DevOps Organization name
project_name = "Azure-Dashboard"  # Replace with your Azure DevOps Project name

# Function to trigger Azure DevOps pipeline
def trigger_pipeline_logic(pipeline_variables):
    # Azure DevOps organization, project, and pipeline details
    organization = "1Azure-Dashboard"  # Replace with your Azure DevOps organization name
    project = "Azure-Dashboard"  # Replace with your Azure DevOps project name
    pipeline_id = "1"  # Replace with your actual pipeline definition ID
    devops_url = f'https://dev.azure.com/{organization}/{project}/_apis/pipelines/{pipeline_id}/runs?api-version=7.0'

    # Headers for Azure DevOps authentication (replace with your personal access token)
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic {}'.format(encoded_pat),  # Use your encoded PAT token
    }

    # Debugging: Print the payload to check if all the necessary variables are present
    print(f"Payload to trigger pipeline: {pipeline_variables}")

    # Payload to trigger the pipeline (passing pipeline variables)
    template_parameters = {
        key: str(value).lower() if isinstance(value, bool) else str(value)
        for key, value in pipeline_variables.items()
    }

    # Final payload with ref and parameters
    payload = {
        "resources": {
            "repositories": {
                "self": {
                    "refName": "refs/heads/main"  # Replace with your default branch name if different
                }
            }
        },
        "templateParameters": template_parameters
    }

    # Trigger the pipeline using a POST request
    try:
        response = requests.post(devops_url, json=payload, headers=headers)
        response.raise_for_status()  # Raise an exception for HTTP errors
        return response.json()  # Return the response from the API
    except requests.exceptions.RequestException as e:
        print(f"Error triggering pipeline: {e}")
        return {"error": "Failed to trigger pipeline"}


# Function to check diagnostic settings for resources
# def get_diagnostic_settings(credential, subscription_id, resource_id):
#     client = MonitorManagementClient(credential, subscription_id)

#     try:
#         # Get diagnostic settings for the resource
#         diagnostic_settings = client.diagnostic_settings.list(resource_id)
#         return any(True for _ in diagnostic_settings)  # Returns True if there's at least one setting
#     except Exception as e:
#         print(f"Error fetching diagnostic settings for {resource_id}: {e}")
#         return False
        
def has_private_endpoint(client, resource_group_name, resource_name):
    try:
        # Check if there are private endpoint connections associated with the resource
        endpoints = client.private_endpoint_connections.list(resource_group_name, resource_name)
        return any(endpoint.connection_state.status.lower() == 'approved' for endpoint in endpoints)
    except Exception as e:
        print(f"Error checking private endpoint for {resource_name}: {e}")
        return False

def is_vm_backed_up(backup_client, rg_name, vault_name, vm_id):
    try:
        container_list = backup_client.backup_protected_items.list(vault_name, rg_name, filter="backupManagementType eq 'AzureIaasVM'")
        for item in container_list:
            if vm_id.lower() in item.properties.source_resource_id.lower():
                return True
        return False
    except Exception:
        return False

def is_fileshare_protected(backup_client, rg_name, vault_name):
    try:
        items = backup_client.backup_protected_items.list(vault_name, rg_name, filter="workloadType eq 'AzureFileShare'")
        return len(list(items)) > 0
    except Exception:
        return False
# Route to fetch resources
@app.route('/api/resources', methods=['GET'])
def get_resources():
    result = {'StorageAccounts': [], 'VirtualMachines': [], 'RecoveryVaults': []}

    try:
        for rg in resource_client.resource_groups.list():
            rg_name = rg.name

            # Storage Accounts
            for sa in storage_client.storage_accounts.list_by_resource_group(rg_name):
                props = storage_client.storage_accounts.get_properties(rg_name, sa.name)
                result['StorageAccounts'].append({
                    "type":"StorageAccount",
                    "name": sa.name,
                    "resourceGroup": rg_name,
                    "location": sa.location,
                    "tls_version": props.minimum_tls_version,
                    "redundancy": props.sku.name,
                    "shared_key_access": props.allow_shared_key_access,
                    "blob_public_access": props.allow_blob_public_access,
                    "public_access_disabled": not props.allow_blob_public_access if props.allow_blob_public_access is not None else "Unknown",
                    #"soft_delete": "Not Available in SDK",
                    "tier": props.access_tier if props.access_tier else "N/A",
                    #"diagnostic_setting": get_diagnostic_settings(monitor_client, subscription_id, sa.id),
                    "private_endpoint": has_private_endpoint(storage_client, rg_name, sa.name)
                })

            # Virtual Machines
            for vm in compute_client.virtual_machines.list(rg_name):
                vm_info = compute_client.virtual_machines.get(rg_name, vm.name, expand="instanceView")
                result['VirtualMachines'].append({
                    "type":"VirtualMachine",
                    "name": vm.name,
                    "resourceGroup": rg_name,
                    "location": vm.location,
                    "size": vm_info.hardware_profile.vm_size if vm_info.hardware_profile else "Unknown",
                    #"diagnostic_setting": get_diagnostic_settings(monitor_client, subscription_id, vm.id),
                    "disk_backup_enabled": any(
                        is_vm_backed_up(backup_client, rg_name, vault.name, vm.id)
                        for vault in recovery_client.vaults.list_by_resource_group(rg_name)
                    )
                })

            # Recovery Vaults
            for vault in recovery_client.vaults.list_by_resource_group(rg_name):
                vault_props = recovery_client.vaults.get(rg_name, vault.name)

                private_endpoints = getattr(vault_props, 'private_endpoint_connections', [])
                private_endpoints_enabled = any(pe.connection_state.status.lower() == 'approved' for pe in private_endpoints)
                public_access_disabled = private_endpoints_enabled

                result['RecoveryVaults'].append({
                    "type":"RecoveryVault",
                    "name": vault.name,
                    "resourceGroup": rg_name,
                    "location": vault.location,
                    #"diagnostic_setting": get_diagnostic_settings(monitor_client, subscription_id, vault.id),
                    "backup_redundancy": vault_props.sku.name,
                    "private_endpoints_enabled": private_endpoints_enabled,
                    "public_access_disabled": public_access_disabled,
                    "fileshare_protection_enabled": is_fileshare_protected(backup_client, rg_name, vault.name)
                })

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to trigger pipeline
@app.route('/api/trigger-pipeline', methods=['POST'])
def trigger_pipeline():
    # Extract the data from the request
    data = request.get_json()
    
    # Ensure ResourceGroup and ResourceType are properly set
    resource_group = data.get('rg_name')
    resource_name = data.get('name')
    resource_type = data.get('type')  # Ensure this field exists
    optimize_property = data.get('property', None)  # Can be None if optimizing all properties
    optimize_all = data.get('optimizeAll', False)  # Flag for optimizing the entire resource
    
    # Validate input - ensure that necessary fields are present
    if not resource_group or not resource_type:
        return jsonify({"error": "Resource Group and Resource Type are required"}), 400
    
    # Prepare pipeline variables
    pipeline_variables = {
        "ResourceGroup": resource_group,
        "ResourceName": resource_name,
        "ResourceType": resource_type,
        "OptimizeProperty": optimize_property,  # Specific property to optimize (or None for optimize all)
        "OptimizeAll": optimize_all  # Flag to indicate if all properties need optimization
    }

    try:
        # Call the function to trigger the pipeline (here it triggers based on the passed parameters)
        result = trigger_pipeline_logic(pipeline_variables)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
