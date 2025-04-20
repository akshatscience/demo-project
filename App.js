// // // // // // // import React, { useEffect, useState } from 'react';

// // // // // // // const App = () => {
// // // // // // //   const [resources, setResources] = useState([]);
// // // // // // //   const [selectedType, setSelectedType] = useState('');

// // // // // // //   useEffect(() => {
// // // // // // //     fetch('http://localhost:5000/api/resources')
// // // // // // //       .then((res) => res.json())
// // // // // // //       .then((data) => setResources(data))
// // // // // // //       .catch((err) => console.error('Error fetching resources:', err));
// // // // // // //   }, []);

// // // // // // //   const resourceTypes = [...new Set(resources.map((res) => res.type))];
// // // // // // //   const filteredResources = selectedType
// // // // // // //     ? resources.filter((res) => res.type === selectedType)
// // // // // // //     : resources;

// // // // // // //   return (
// // // // // // //     <div style={styles.container}>
// // // // // // //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>
// // // // // // //       <div style={styles.dropdownContainer}>
// // // // // // //         <label htmlFor="type-select" style={styles.label}>Resource Types</label>
// // // // // // //         <select
// // // // // // //           id="type-select"
// // // // // // //           style={styles.select}
// // // // // // //           onChange={(e) => setSelectedType(e.target.value)}
// // // // // // //           value={selectedType}
// // // // // // //         >
// // // // // // //           <option value="">All</option>
// // // // // // //           {resourceTypes.map((type) => (
// // // // // // //             <option key={type} value={type}>
// // // // // // //               {type.split('/').pop()}
// // // // // // //             </option>
// // // // // // //           ))}
// // // // // // //         </select>
// // // // // // //       </div>

// // // // // // //       <div style={styles.cardContainer}>
// // // // // // //         {filteredResources.map((res) => (
// // // // // // //           <div key={res.id} style={styles.card}>
// // // // // // //             <h2 style={styles.cardTitle}>{res.name}</h2>
// // // // // // //             <p><strong>Type:</strong> {res.type}</p>
// // // // // // //             <p><strong>Location:</strong> {res.location}</p>
// // // // // // //             <p><strong>Resource Group:</strong> {res.resourceGroup}</p>
// // // // // // //             <p><strong>Status:</strong> {res.mainProperties.status}</p>
// // // // // // //             <p><strong>Size:</strong> {res.mainProperties.size}</p>
// // // // // // //             <p><strong>Provisioning State:</strong> {res.provisioningState}</p>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = {
// // // // // // //   container: {
// // // // // // //     fontFamily: 'Arial, sans-serif',
// // // // // // //     padding: '2rem',
// // // // // // //     backgroundColor: '#f2f6ff',
// // // // // // //     minHeight: '100vh',
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     textAlign: 'center',
// // // // // // //     color: '#003366',
// // // // // // //   },
// // // // // // //   dropdownContainer: {
// // // // // // //     margin: '1rem 0',
// // // // // // //     textAlign: 'center',
// // // // // // //   },
// // // // // // //   label: {
// // // // // // //     marginRight: '1rem',
// // // // // // //     fontSize: '1rem',
// // // // // // //   },
// // // // // // //   select: {
// // // // // // //     padding: '0.5rem',
// // // // // // //     fontSize: '1rem',
// // // // // // //   },
// // // // // // //   cardContainer: {
// // // // // // //     display: 'flex',
// // // // // // //     flexWrap: 'wrap',
// // // // // // //     gap: '1rem',
// // // // // // //     justifyContent: 'center',
// // // // // // //   },
// // // // // // //   card: {
// // // // // // //     backgroundColor: '#fff',
// // // // // // //     padding: '1rem',
// // // // // // //     borderRadius: '0.5rem',
// // // // // // //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// // // // // // //     width: '300px',
// // // // // // //   },
// // // // // // //   cardTitle: {
// // // // // // //     marginBottom: '0.5rem',
// // // // // // //     color: '#003366',
// // // // // // //   },
// // // // // // // };

// // // // // // // export default App;


// // // // // // import React, { useEffect, useState } from 'react';

// // // // // // const App = () => {
// // // // // //   const [resources, setResources] = useState({
// // // // // //     StorageAccounts: [],
// // // // // //     VirtualMachines: [],
// // // // // //     RecoveryVaults: [],
// // // // // //     BackupVaults: []
// // // // // //   });
// // // // // //   const [selectedType, setSelectedType] = useState('');
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     // Fetch resources data from the Flask backend
// // // // // //     fetch('http://localhost:5000/api/resources')
// // // // // //       .then((res) => res.json())
// // // // // //       .then((data) => {
// // // // // //         setResources(data);
// // // // // //         setLoading(false);
// // // // // //       })
// // // // // //       .catch((err) => {
// // // // // //         console.error('Error fetching resources:', err);
// // // // // //         setLoading(false);
// // // // // //       });
// // // // // //   }, []);

// // // // // //   const resourceTypes = ['StorageAccounts', 'VirtualMachines', 'RecoveryVaults', 'BackupVaults'];
// // // // // //   const filteredResources = selectedType
// // // // // //     ? resources[selectedType]
// // // // // //     : [].concat(...resourceTypes.map((type) => resources[type]));

// // // // // //   return (
// // // // // //     <div style={styles.container}>
// // // // // //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>
// // // // // //       <div style={styles.dropdownContainer}>
// // // // // //         <label htmlFor="type-select" style={styles.label}>Resource Types</label>
// // // // // //         <select
// // // // // //           id="type-select"
// // // // // //           style={styles.select}
// // // // // //           onChange={(e) => setSelectedType(e.target.value)}
// // // // // //           value={selectedType}
// // // // // //         >
// // // // // //           <option value="">All</option>
// // // // // //           {resourceTypes.map((type) => (
// // // // // //             <option key={type} value={type}>
// // // // // //               {type}
// // // // // //             </option>
// // // // // //           ))}
// // // // // //         </select>
// // // // // //       </div>

// // // // // //       {loading ? (
// // // // // //         <p>Loading resources...</p>
// // // // // //       ) : (
// // // // // //         <div style={styles.cardContainer}>
// // // // // //           {filteredResources.map((res) => (
// // // // // //             <div key={res.name} style={styles.card}>
// // // // // //               <h2 style={styles.cardTitle}>{res.name}</h2>
// // // // // //               <p><strong>Resource Group:</strong> {res.resource_group}</p>
// // // // // //               <p><strong>Location:</strong> {res.location}</p>
// // // // // //               {res.tls_version && <p><strong>TLS Version:</strong> {res.tls_version}</p>}
// // // // // //               {res.redundancy && <p><strong>Redundancy:</strong> {res.redundancy}</p>}
// // // // // //               {res.shared_key_access !== undefined && (
// // // // // //                 <p><strong>Shared Key Access:</strong> {res.shared_key_access ? 'Enabled' : 'Disabled'}</p>
// // // // // //               )}
// // // // // //               {res.blob_public_access !== undefined && (
// // // // // //                 <p><strong>Blob Public Access:</strong> {res.blob_public_access ? 'Enabled' : 'Disabled'}</p>
// // // // // //               )}
// // // // // //               {res.public_access_disabled !== undefined && (
// // // // // //                 <p><strong>Public Access Disabled:</strong> {res.public_access_disabled ? 'Yes' : 'No'}</p>
// // // // // //               )}
// // // // // //               {res.soft_delete !== undefined && (
// // // // // //                 <p><strong>Soft Delete Enabled:</strong> {res.soft_delete ? 'Yes' : 'No'}</p>
// // // // // //               )}
// // // // // //               {res.soft_delete_retention_days && (
// // // // // //                 <p><strong>Soft Delete Retention Days:</strong> {res.soft_delete_retention_days}</p>
// // // // // //               )}
// // // // // //               {res.tier && <p><strong>Tier:</strong> {res.tier}</p>}
// // // // // //               {res.diagnostic_setting && (
// // // // // //                 <p><strong>Diagnostic Settings:</strong> {res.diagnostic_setting.length > 0 ? 'Configured' : 'Not Configured'}</p>
// // // // // //               )}
// // // // // //               {res.private_endpoint !== undefined && (
// // // // // //                 <p><strong>Private Endpoint:</strong> {res.private_endpoint ? 'Enabled' : 'Not Enabled'}</p>
// // // // // //               )}
// // // // // //               {res.disk_backup_enabled !== undefined && (
// // // // // //                 <p><strong>Disk Backup Enabled:</strong> {res.disk_backup_enabled ? 'Yes' : 'No'}</p>
// // // // // //               )}
// // // // // //               {res.fileshare_protection_enabled !== undefined && (
// // // // // //                 <p><strong>File Share Protection Enabled:</strong> {res.fileshare_protection_enabled ? 'Yes' : 'No'}</p>
// // // // // //               )}
// // // // // //               {res.cross_subscription_restore !== undefined && (
// // // // // //                 <p><strong>Cross Subscription Restore:</strong> {res.cross_subscription_restore ? 'Enabled' : 'Disabled'}</p>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // const styles = {
// // // // // //   container: {
// // // // // //     fontFamily: 'Arial, sans-serif',
// // // // // //     padding: '2rem',
// // // // // //     backgroundColor: '#f2f6ff',
// // // // // //     minHeight: '100vh',
// // // // // //   },
// // // // // //   header: {
// // // // // //     textAlign: 'center',
// // // // // //     color: '#003366',
// // // // // //   },
// // // // // //   dropdownContainer: {
// // // // // //     margin: '1rem 0',
// // // // // //     textAlign: 'center',
// // // // // //   },
// // // // // //   label: {
// // // // // //     marginRight: '1rem',
// // // // // //     fontSize: '1rem',
// // // // // //   },
// // // // // //   select: {
// // // // // //     padding: '0.5rem',
// // // // // //     fontSize: '1rem',
// // // // // //   },
// // // // // //   cardContainer: {
// // // // // //     display: 'flex',
// // // // // //     flexWrap: 'wrap',
// // // // // //     gap: '1rem',
// // // // // //     justifyContent: 'center',
// // // // // //   },
// // // // // //   card: {
// // // // // //     backgroundColor: '#fff',
// // // // // //     padding: '1rem',
// // // // // //     borderRadius: '0.5rem',
// // // // // //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// // // // // //     width: '300px',
// // // // // //   },
// // // // // //   cardTitle: {
// // // // // //     marginBottom: '0.5rem',
// // // // // //     color: '#003366',
// // // // // //   },
// // // // // // };

// // // // // // export default App;


// // // // // import React, { useEffect, useState } from 'react';

// // // // // const App = () => {
// // // // //   const [resources, setResources] = useState({});
// // // // //   const [selectedType, setSelectedType] = useState('StorageAccounts');

// // // // //   useEffect(() => {
// // // // //     fetch('http://localhost:5000/api/resources')
// // // // //       .then((res) => res.json())
// // // // //       .then((data) => setResources(data))
// // // // //       .catch((err) => console.error('Error fetching resources:', err));
// // // // //   }, []);

// // // // //   const resourceTypes = Object.keys(resources);
// // // // //   const displayedResources = resources[selectedType] || [];

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>
// // // // //       <div style={styles.dropdownContainer}>
// // // // //         <label htmlFor="type-select" style={styles.label}>Resource Type:</label>
// // // // //         <select
// // // // //           id="type-select"
// // // // //           style={styles.select}
// // // // //           onChange={(e) => setSelectedType(e.target.value)}
// // // // //           value={selectedType}
// // // // //         >
// // // // //           {resourceTypes.map((type) => (
// // // // //             <option key={type} value={type}>
// // // // //               {type}
// // // // //             </option>
// // // // //           ))}
// // // // //         </select>
// // // // //       </div>

// // // // //       <div style={styles.cardContainer}>
// // // // //         {displayedResources.map((res, index) => (
// // // // //           <div key={index} style={styles.card}>
// // // // //             <h2 style={styles.cardTitle}>{res.name}</h2>
// // // // //             <p><strong>Resource Group:</strong> {res.resource_group}</p>
// // // // //             <p><strong>Location:</strong> {res.location || 'N/A'}</p>

// // // // //             {/* Custom display for each resource type */}
// // // // //             {selectedType === 'StorageAccounts' && (
// // // // //               <>
// // // // //                 <p><strong>TLS Version:</strong> {res.tls_version}</p>
// // // // //                 <p><strong>Redundancy:</strong> {res.redundancy}</p>
// // // // //                 <p><strong>Shared Key Access:</strong> {String(res.shared_key_access)}</p>
// // // // //                 <p><strong>Blob Public Access:</strong> {String(res.blob_public_access)}</p>
// // // // //                 <p><strong>Soft Delete Enabled:</strong> {String(res.soft_delete)}</p>
// // // // //                 <p><strong>Soft Delete Retention Days:</strong> {res.soft_delete_retention_days}</p>
// // // // //                 <p><strong>Tier:</strong> {res.tier}</p>
// // // // //                 <p><strong>Private Endpoint:</strong> {String(res.private_endpoint)}</p>
// // // // //               </>
// // // // //             )}

// // // // //             {selectedType === 'VirtualMachines' && (
// // // // //               <>
// // // // //                 <p><strong>Size:</strong> {res.size}</p>
// // // // //                 <p><strong>Disk Backup Enabled:</strong> {String(res.disk_backup_enabled)}</p>
// // // // //               </>
// // // // //             )}

// // // // //             {selectedType === 'RecoveryVaults' && (
// // // // //               <>
// // // // //                 <p><strong>Backup Redundancy:</strong> {res.backup_redundancy}</p>
// // // // //                 <p><strong>Fileshare Protected:</strong> {String(res.fileshare_protection_enabled)}</p>
// // // // //                 <p><strong>Private Endpoints Enabled:</strong> {String(res.private_endpoints_enabled)}</p>
// // // // //                 <p><strong>Public Access Disabled:</strong> {String(res.public_access_disabled)}</p>
// // // // //               </>
// // // // //             )}

// // // // //             {res.diagnostic_setting && (
// // // // //               <p><strong>Diagnostic Setting:</strong> Enabled</p>
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const styles = {
// // // // //   container: {
// // // // //     fontFamily: 'Arial, sans-serif',
// // // // //     padding: '2rem',
// // // // //     backgroundColor: '#f2f6ff',
// // // // //     minHeight: '100vh',
// // // // //   },
// // // // //   header: {
// // // // //     textAlign: 'center',
// // // // //     color: '#003366',
// // // // //   },
// // // // //   dropdownContainer: {
// // // // //     margin: '1rem 0',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   label: {
// // // // //     marginRight: '1rem',
// // // // //     fontSize: '1rem',
// // // // //   },
// // // // //   select: {
// // // // //     padding: '0.5rem',
// // // // //     fontSize: '1rem',
// // // // //   },
// // // // //   cardContainer: {
// // // // //     display: 'flex',
// // // // //     flexWrap: 'wrap',
// // // // //     gap: '1rem',
// // // // //     justifyContent: 'center',
// // // // //   },
// // // // //   card: {
// // // // //     backgroundColor: '#fff',
// // // // //     padding: '1rem',
// // // // //     borderRadius: '0.5rem',
// // // // //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// // // // //     width: '300px',
// // // // //   },
// // // // //   cardTitle: {
// // // // //     marginBottom: '0.5rem',
// // // // //     color: '#003366',
// // // // //   },
// // // // // };

// // // // // export default App;


// // // // import React, { useEffect, useState } from 'react';

// // // // const App = () => {
// // // //   const [resources, setResources] = useState({});
// // // //   const [selectedType, setSelectedType] = useState('StorageAccounts');

// // // //   useEffect(() => {
// // // //     fetch('http://localhost:5000/api/resources')
// // // //       .then((res) => res.json())
// // // //       .then((data) => setResources(data))
// // // //       .catch((err) => console.error('Error fetching resources:', err));
// // // //   }, []);

// // // //   const resourceTypes = Object.keys(resources);
// // // //   const displayedResources = resources[selectedType] || [];

// // // //   const isVmOversized = (size) => {
// // // //     // Example: basic size optimization rule — customize as needed
// // // //     const optimizedSizes = [
// // // //       'Standard_B1s',
// // // //       'Standard_B2s',
// // // //       'Standard_DS1_v2',
// // // //       'Standard_DS2_v2',
// // // //     ];
// // // //     return !optimizedSizes.includes(size);
// // // //   };

// // // //   const needsOptimization = (res, type) => {
// // // //     if (type === 'StorageAccounts') {
// // // //       return (
// // // //         res.tls_version !== 'TLS1_2' ||
// // // //         res.soft_delete !== true ||
// // // //         res.private_endpoint !== true ||
// // // //         res.redundancy !== 'LRS' ||
// // // //         res.shared_key_access !== false ||
// // // //         res.blob_public_access !== false ||
// // // //         res.tier !== 'Cool' ||
// // // //         !res.diagnostic_setting ||
// // // //         res.fileshare_protection_enabled !== true
// // // //       );
// // // //     }
// // // //     if (type === 'VirtualMachines') {
// // // //       return (
// // // //         !res.diagnostic_setting ||
// // // //         res.disk_backup_enabled !== true ||
// // // //         isVmOversized(res.size)
// // // //       );
// // // //     }
// // // //     if (type === 'RecoveryVaults') {
// // // //       return (
// // // //         res.fileshare_protection_enabled !== true ||
// // // //         res.backup_redundancy !== 'LRS' ||
// // // //         res.public_access_disabled !== true ||
// // // //         res.private_endpoints_enabled !== true ||
// // // //         !res.diagnostic_setting
// // // //       );
// // // //     }
// // // //     return false;
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>
// // // //       <div style={styles.dropdownContainer}>
// // // //         <label htmlFor="type-select" style={styles.label}>Resource Type:</label>
// // // //         <select
// // // //           id="type-select"
// // // //           style={styles.select}
// // // //           onChange={(e) => setSelectedType(e.target.value)}
// // // //           value={selectedType}
// // // //         >
// // // //           {resourceTypes.map((type) => (
// // // //             <option key={type} value={type}>
// // // //               {type}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //       </div>

// // // //       <div style={styles.cardContainer}>
// // // //         {displayedResources.map((res, index) => (
// // // //           <div key={index} style={styles.card}>
// // // //             <h2 style={styles.cardTitle}>{res.name}</h2>
// // // //             <p><strong>Resource Group:</strong> {res.resourceGroup}</p>
// // // //             <p><strong>Location:</strong> {res.location || 'N/A'}</p>

// // // //             {selectedType === 'StorageAccounts' && (
// // // //               <>
// // // //                 <p><strong>TLS Version:</strong> {res.tls_version}</p>
// // // //                 <p><strong>Redundancy:</strong> {res.redundancy}</p>
// // // //                 <p><strong>Shared Key Access:</strong> {String(res.shared_key_access)}</p>
// // // //                 <p><strong>Blob Public Access:</strong> {String(res.blob_public_access)}</p>
// // // //                 <p><strong>Soft Delete:</strong> {String(res.soft_delete)}</p>
// // // //                 <p><strong>Tier:</strong> {res.tier}</p>
// // // //                 <p><strong>Private Endpoint:</strong> {String(res.private_endpoint)}</p>
// // // //                 <p><strong>Fileshare Protected:</strong> {String(res.fileshare_protection_enabled)}</p>
// // // //               </>
// // // //             )}

// // // //             {selectedType === 'VirtualMachines' && (
// // // //               <>
// // // //                 <p><strong>Size:</strong> {res.size}</p>
// // // //                 <p><strong>Disk Backup Enabled:</strong> {String(res.disk_backup_enabled)}</p>
// // // //               </>
// // // //             )}

// // // //             {selectedType === 'RecoveryVaults' && (
// // // //               <>
// // // //                 <p><strong>Backup Redundancy:</strong> {res.backup_redundancy}</p>
// // // //                 <p><strong>Fileshare Protected:</strong> {String(res.fileshare_protection_enabled)}</p>
// // // //                 <p><strong>Private Endpoints Enabled:</strong> {String(res.private_endpoints_enabled)}</p>
// // // //                 <p><strong>Public Access Disabled:</strong> {String(res.public_access_disabled)}</p>
// // // //               </>
// // // //             )}

// // // //             {res.diagnostic_setting && (
// // // //               <p><strong>Diagnostic Setting:</strong> Enabled</p>
// // // //             )}

// // // //             {needsOptimization(res, selectedType) && (
// // // //               <button style={styles.optimizeButton}>Optimize</button>
// // // //             )}
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   container: {
// // // //     fontFamily: 'Arial, sans-serif',
// // // //     padding: '2rem',
// // // //     backgroundColor: '#f2f6ff',
// // // //     minHeight: '100vh',
// // // //   },
// // // //   header: {
// // // //     textAlign: 'center',
// // // //     color: '#003366',
// // // //   },
// // // //   dropdownContainer: {
// // // //     margin: '1rem 0',
// // // //     textAlign: 'center',
// // // //   },
// // // //   label: {
// // // //     marginRight: '1rem',
// // // //     fontSize: '1rem',
// // // //   },
// // // //   select: {
// // // //     padding: '0.5rem',
// // // //     fontSize: '1rem',
// // // //   },
// // // //   cardContainer: {
// // // //     display: 'flex',
// // // //     flexWrap: 'wrap',
// // // //     gap: '1rem',
// // // //     justifyContent: 'center',
// // // //   },
// // // //   card: {
// // // //     backgroundColor: '#fff',
// // // //     padding: '1rem',
// // // //     borderRadius: '0.5rem',
// // // //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// // // //     width: '300px',
// // // //   },
// // // //   cardTitle: {
// // // //     marginBottom: '0.5rem',
// // // //     color: '#003366',
// // // //   },
// // // //   optimizeButton: {
// // // //     marginTop: '1rem',
// // // //     padding: '0.5rem 1rem',
// // // //     backgroundColor: '#ff6600',
// // // //     color: 'white',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //   },
// // // // };

// // // // export default App;


// // // import React, { useEffect, useState } from 'react';

// // // const App = () => {
// // //   const [resources, setResources] = useState({});
// // //   const [selectedType, setSelectedType] = useState('StorageAccounts');

// // //   useEffect(() => {
// // //     fetch('http://localhost:5000/api/resources')
// // //       .then((res) => res.json())
// // //       .then((data) => setResources(data))
// // //       .catch((err) => console.error('Error fetching resources:', err));
// // //   }, []);

// // //   const resourceTypes = Object.keys(resources);
// // //   const displayedResources = resources[selectedType] || [];

// // //   const shouldOptimizeStorage = (res) => {
// // //     return (
// // //       res.tls_version !== 'TLS1_2' ||
// // //       res.soft_delete !== true ||
// // //       !res.private_endpoint ||
// // //       res.redundancy !== 'LRS' ||
// // //       res.shared_key_access !== false ||
// // //       res.blob_public_access !== false ||
// // //       res.tier !== 'Cool' ||
// // //       !res.diagnostic_setting ||
// // //       res.fileshare_protection_enabled !== true
// // //     );
// // //   };

// // //   const shouldOptimizeVM = (res) => {
// // //     return (
// // //       !res.diagnostic_setting ||
// // //       res.disk_backup_enabled !== true ||
// // //       res.size && res.size.startsWith('Standard_D')
// // //     );
// // //   };

// // //   const shouldOptimizeVault = (res) => {
// // //     return (
// // //       res.fileshare_protection_enabled !== true ||
// // //       res.backup_redundancy !== 'LRS' ||
// // //       res.public_access_disabled !== true ||
// // //       res.private_endpoints_enabled !== true ||
// // //       !res.diagnostic_setting
// // //     );
// // //   };

// // //   const checkCondition = (condition) => {
// // //     return !condition ? (
// // //       <button style={styles.optimizeBtn}>Optimize</button>
// // //     ) : null;
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>
// // //       <div style={styles.dropdownContainer}>
// // //         <label htmlFor="type-select" style={styles.label}>Resource Type:</label>
// // //         <select
// // //           id="type-select"
// // //           style={styles.select}
// // //           onChange={(e) => setSelectedType(e.target.value)}
// // //           value={selectedType}
// // //         >
// // //           {resourceTypes.map((type) => (
// // //             <option key={type} value={type}>
// // //               {type}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       <div style={styles.cardContainer}>
// // //         {displayedResources.map((res, index) => {
// // //           const optimize =
// // //             (selectedType === 'StorageAccounts' && shouldOptimizeStorage(res)) ||
// // //             (selectedType === 'VirtualMachines' && shouldOptimizeVM(res)) ||
// // //             (selectedType === 'RecoveryVaults' && shouldOptimizeVault(res));

// // //           return (
// // //             <div key={index} style={styles.card}>
// // //               <h2 style={styles.cardTitle}>{res.name}</h2>
// // //               <p><strong>Resource Group:</strong> {res.resourceGroup || res.resource_group || 'N/A'}</p>
// // //               <p><strong>Location:</strong> {res.location || 'N/A'}</p>

// // //               {selectedType === 'StorageAccounts' && (
// // //                 <>
// // //                   <p><strong>TLS Version:</strong> {res.tls_version} {checkCondition(res.tls_version === 'TLS1_2')}</p>
// // //                   <p><strong>Redundancy:</strong> {res.redundancy} {checkCondition(res.redundancy === 'LRS')}</p>
// // //                   <p><strong>Shared Key Access:</strong> {String(res.shared_key_access)} {checkCondition(res.shared_key_access === false)}</p>
// // //                   <p><strong>Blob Public Access:</strong> {String(res.blob_public_access)} {checkCondition(res.blob_public_access === false)}</p>
// // //                   <p><strong>Soft Delete Enabled:</strong> {String(res.soft_delete)} {checkCondition(res.soft_delete === true)}</p>
// // //                   <p><strong>Tier:</strong> {res.tier} {checkCondition(res.tier === 'Cool')}</p>
// // //                   <p><strong>Private Endpoint:</strong> {String(res.private_endpoint)} {checkCondition(res.private_endpoint)}</p>
// // //                   <p><strong>Fileshare Protected:</strong> {String(res.fileshare_protection_enabled)} {checkCondition(res.fileshare_protection_enabled)}</p>
// // //                   <p><strong>Diagnostic Setting:</strong> {res.diagnostic_setting ? 'Enabled' : 'Disabled'} {checkCondition(res.diagnostic_setting)}</p>
// // //                 </>
// // //               )}

// // //               {selectedType === 'VirtualMachines' && (
// // //                 <>
// // //                   <p><strong>Size:</strong> {res.size} {checkCondition(!res.size?.startsWith('Standard_D'))}</p>
// // //                   <p><strong>Disk Backup Enabled:</strong> {String(res.disk_backup_enabled)} {checkCondition(res.disk_backup_enabled)}</p>
// // //                   <p><strong>Diagnostic Setting:</strong> {res.diagnostic_setting ? 'Enabled' : 'Disabled'} {checkCondition(res.diagnostic_setting)}</p>
// // //                 </>
// // //               )}

// // //               {selectedType === 'RecoveryVaults' && (
// // //                 <>
// // //                   <p><strong>Backup Redundancy:</strong> {res.backup_redundancy} {checkCondition(res.backup_redundancy === 'LRS')}</p>
// // //                   <p><strong>Fileshare Protected:</strong> {String(res.fileshare_protection_enabled)} {checkCondition(res.fileshare_protection_enabled)}</p>
// // //                   <p><strong>Private Endpoints Enabled:</strong> {String(res.private_endpoints_enabled)} {checkCondition(res.private_endpoints_enabled)}</p>
// // //                   <p><strong>Public Access Disabled:</strong> {String(res.public_access_disabled)} {checkCondition(res.public_access_disabled)}</p>
// // //                   <p><strong>Diagnostic Setting:</strong> {res.diagnostic_setting ? 'Enabled' : 'Disabled'} {checkCondition(res.diagnostic_setting)}</p>
// // //                 </>
// // //               )}

// // //               {optimize && <div style={styles.fullOptimize}><button style={styles.optimizeBtn}>Optimize Resource</button></div>}
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     fontFamily: 'Arial, sans-serif',
// // //     padding: '2rem',
// // //     backgroundColor: '#f2f6ff',
// // //     minHeight: '100vh',
// // //   },
// // //   header: {
// // //     textAlign: 'center',
// // //     color: '#003366',
// // //   },
// // //   dropdownContainer: {
// // //     margin: '1rem 0',
// // //     textAlign: 'center',
// // //   },
// // //   label: {
// // //     marginRight: '1rem',
// // //     fontSize: '1rem',
// // //   },
// // //   select: {
// // //     padding: '0.5rem',
// // //     fontSize: '1rem',
// // //   },
// // //   cardContainer: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '1rem',
// // //     justifyContent: 'center',
// // //   },
// // //   card: {
// // //     backgroundColor: '#fff',
// // //     padding: '1rem',
// // //     borderRadius: '0.5rem',
// // //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// // //     width: '340px',
// // //   },
// // //   cardTitle: {
// // //     marginBottom: '0.5rem',
// // //     color: '#003366',
// // //   },
// // //   optimizeBtn: {
// // //     marginLeft: '10px',
// // //     padding: '0.2rem 0.5rem',
// // //     fontSize: '0.8rem',
// // //     backgroundColor: '#ff6b6b',
// // //     color: 'white',
// // //     border: 'none',
// // //     borderRadius: '0.3rem',
// // //     cursor: 'pointer',
// // //   },
// // //   fullOptimize: {
// // //     textAlign: 'center',
// // //     marginTop: '1rem',
// // //   },
// // // };

// // // export default App;

// // // import React, { useEffect, useState } from 'react';

// // // const App = () => {
// // //   const [resources, setResources] = useState({});
// // //   const [selectedType, setSelectedType] = useState('StorageAccounts');

// // //   useEffect(() => {
// // //     fetch('http://localhost:5000/api/resources')
// // //       .then((res) => res.json())
// // //       .then((data) => setResources(data))
// // //       .catch((err) => console.error('Error fetching resources:', err));
// // //   }, []);

// // //   const resourceTypes = Object.keys(resources);
// // //   const displayedResources = resources[selectedType] || [];

// // //   const handleOptimizeProperty = async (resource, property) => {
// // //     try {
// // //       await fetch('http://localhost:5000/api/optimize-property', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({
// // //           type: selectedType,
// // //           name: resource.name,
// // //           resourceGroup: resource.resource_group,
// // //           property: property,
// // //         }),
// // //       });
// // //       // After optimizing, refetch data
// // //       const updatedResources = await fetch('http://localhost:5000/api/resources').then((res) => res.json());
// // //       setResources(updatedResources);
// // //     } catch (error) {
// // //       console.error('Error optimizing property:', error);
// // //     }
// // //   };

// // //   const handleOptimizeResource = async (resource) => {
// // //     try {
// // //       await fetch('http://localhost:5000/api/optimize-resource', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({
// // //           type: selectedType,
// // //           name: resource.name,
// // //           resourceGroup: resource.resource_group,
// // //         }),
// // //       });
// // //       // After optimizing, refetch data
// // //       const updatedResources = await fetch('http://localhost:5000/api/resources').then((res) => res.json());
// // //       setResources(updatedResources);
// // //     } catch (error) {
// // //       console.error('Error optimizing resource:', error);
// // //     }
// // //   };

// // //   const checkOptimizeButton = (res, property) => {
// // //     switch (property) {
// // //       case 'tls_version':
// // //         return res.tls_version !== '1.2';
// // //       case 'soft_delete':
// // //         return res.soft_delete !== 'enabled';
// // //       case 'private_endpoint':
// // //         return !res.private_endpoint;
// // //       case 'redundancy':
// // //         return res.redundancy !== 'LRS';
// // //       case 'shared_key_access':
// // //         return res.shared_key_access !== 'disabled';
// // //       case 'blob_public_access':
// // //         return res.blob_public_access !== 'disabled';
// // //       case 'tier':
// // //         return res.tier !== 'Cool';
// // //       case 'diagnostic_setting':
// // //         return !res.diagnostic_setting;
// // //       case 'fileshare_backup':
// // //         return !res.fileshare_backup;
// // //       case 'size':
// // //         return !res.size; // Implement custom logic for size
// // //       case 'disk_backup_enabled':
// // //         return res.disk_backup_enabled !== 'enabled';
// // //       case 'backup_redundancy':
// // //         return res.backup_redundancy !== 'LRS';
// // //       case 'public_access_disabled':
// // //         return !res.public_access_disabled;
// // //       case 'private_endpoints_enabled':
// // //         return !res.private_endpoints_enabled;
// // //       default:
// // //         return false;
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>
// // //       <div style={styles.dropdownContainer}>
// // //         <label htmlFor="type-select" style={styles.label}>Resource Type:</label>
// // //         <select
// // //           id="type-select"
// // //           style={styles.select}
// // //           onChange={(e) => setSelectedType(e.target.value)}
// // //           value={selectedType}
// // //         >
// // //           {resourceTypes.map((type) => (
// // //             <option key={type} value={type}>
// // //               {type}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       <div style={styles.cardContainer}>
// // //         {displayedResources.map((res, index) => (
// // //           <div key={index} style={styles.card}>
// // //             <h2 style={styles.cardTitle}>{res.name}</h2>
// // //             <p><strong>Resource Group:</strong> {res.resource_group}</p>
// // //             <p><strong>Location:</strong> {res.location || 'N/A'}</p>

// // //             {/* Custom display for each resource type */}
// // //             {selectedType === 'StorageAccounts' && (
// // //               <>
// // //                 <p><strong>TLS Version:</strong> {res.tls_version}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'tls_version')}>Optimize</button>

// // //                 <p><strong>Soft Delete:</strong> {res.soft_delete}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'soft_delete')}>Optimize</button>

// // //                 <p><strong>Private Endpoint:</strong> {String(res.private_endpoint)}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'private_endpoint')}>Optimize</button>

// // //                 <p><strong>Redundancy:</strong> {res.redundancy}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'redundancy')}>Optimize</button>

// // //                 <p><strong>Shared Key Access:</strong> {res.shared_key_access}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'shared_key_access')}>Optimize</button>

// // //                 <p><strong>Blob Public Access:</strong> {res.blob_public_access}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'blob_public_access')}>Optimize</button>

// // //                 <p><strong>Tier:</strong> {res.tier}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'tier')}>Optimize</button>

// // //                 <p><strong>Diagnostic Setting:</strong> {String(res.diagnostic_setting)}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'diagnostic_setting')}>Optimize</button>

// // //                 <p><strong>File Share Backup:</strong> {String(res.fileshare_backup)}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'fileshare_backup')}>Optimize</button>
// // //               </>
// // //             )}

// // //             {selectedType === 'VirtualMachines' && (
// // //               <>
// // //                 <p><strong>Size:</strong> {res.size}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'size')}>Optimize</button>

// // //                 <p><strong>Disk Backup Enabled:</strong> {res.disk_backup_enabled}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'disk_backup_enabled')}>Optimize</button>

// // //                 <p><strong>Diagnostic Setting:</strong> {String(res.diagnostic_setting)}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'diagnostic_setting')}>Optimize</button>
// // //               </>
// // //             )}

// // //             {selectedType === 'RecoveryVaults' && (
// // //               <>
// // //                 <p><strong>Backup Redundancy:</strong> {res.backup_redundancy}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'backup_redundancy')}>Optimize</button>

// // //                 <p><strong>Fileshare Protected:</strong> {String(res.fileshare_protection_enabled)}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'fileshare_protection_enabled')}>Optimize</button>

// // //                 <p><strong>Private Endpoints Enabled:</strong> {String(res.private_endpoints_enabled)}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'private_endpoints_enabled')}>Optimize</button>

// // //                 <p><strong>Public Access Disabled:</strong> {String(res.public_access_disabled)}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'public_access_disabled')}>Optimize</button>

// // //                 <p><strong>Diagnostic Setting:</strong> {String(res.diagnostic_setting)}</p>
// // //                 <button onClick={() => handleOptimizeProperty(res, 'diagnostic_setting')}>Optimize</button>
// // //               </>
// // //             )}

// // //             <button onClick={() => handleOptimizeResource(res)}>Optimize Resource</button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     fontFamily: 'Arial, sans-serif',
// // //     padding: '2rem',
// // //     backgroundColor: '#f2f6ff',
// // //     minHeight: '100vh',
// // //   },
// // //   header: {
// // //     textAlign: 'center',
// // //     color: '#003366',
// // //   },
// // //   dropdownContainer: {
// // //     margin: '1rem 0',
// // //     textAlign: 'center',
// // //   },
// // //   label: {
// // //     marginRight: '1rem',
// // //     fontSize: '1rem',
// // //   },
// // //   select: {
// // //     padding: '0.5rem',
// // //     fontSize: '1rem',
// // //   },
// // //   cardContainer: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     gap: '1rem',
// // //     justifyContent: 'center',
// // //   },
// // //   card: {
// // //     backgroundColor: '#fff',
// // //     padding: '1rem',
// // //     borderRadius: '0.5rem',
// // //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// // //     width: '300px',
// // //   },
// // //   cardTitle: {
// // //     marginBottom: '0.5rem',
// // //     color: '#003366',
// // //   },
// // // };

// // // export default App;

// // import React, { useEffect, useState } from 'react';

// // const App = () => {
// //   const [resources, setResources] = useState({});
// //   const [selectedType, setSelectedType] = useState('All');

// //   useEffect(() => {
// //     fetch('http://localhost:5000/api/resources')
// //       .then((res) => res.json())
// //       .then((data) => setResources(data))
// //       .catch((err) => console.error('Error fetching resources:', err));
// //   }, []);

// //   const resourceTypes = ['All', ...Object.keys(resources)];
// //   const displayedResources =
// //     selectedType === 'All'
// //       ? Object.values(resources).flat()
// //       : resources[selectedType] || [];

// //   const handleOptimizeProperty = async (resource, property) => {
// //     try {
// //       await fetch('http://localhost:5000/api/optimize-property', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           type: resource.type,
// //           name: resource.name,
// //           resourceGroup: resource.resource_group,
// //           property: property,
// //         }),
// //       });
// //       const updatedResources = await fetch('http://localhost:5000/api/resources').then((res) =>
// //         res.json()
// //       );
// //       setResources(updatedResources);
// //     } catch (error) {
// //       console.error('Error optimizing property:', error);
// //     }
// //   };

// //   const handleOptimizeResource = async (resource) => {
// //     try {
// //       await fetch('http://localhost:5000/api/optimize-resource', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           type: resource.type,
// //           name: resource.name,
// //           resourceGroup: resource.resource_group,
// //         }),
// //       });
// //       const updatedResources = await fetch('http://localhost:5000/api/resources').then((res) =>
// //         res.json()
// //       );
// //       setResources(updatedResources);
// //     } catch (error) {
// //       console.error('Error optimizing resource:', error);
// //     }
// //   };

// //   const checkOptimizeButton = (res, property) => {
// //     switch (property) {
// //       case 'tls_version':
// //         return res[property] !== '1.2';
// //       case 'soft_delete':
// //         return res[property] !== 'enabled';
// //       case 'private_endpoint':
// //         return !res[property];
// //       case 'redundancy':
// //         return res[property] !== 'LRS';
// //       case 'shared_key_access':
// //         return res[property] !== 'disabled';
// //       case 'blob_public_access':
// //         return res[property] !== 'disabled';
// //       case 'tier':
// //         return res[property]?.toLowerCase() !== 'cool';
// //       case 'diagnostic_setting':
// //         return !res[property];
// //       case 'fileshare_backup':
// //         return !res[property];
// //       case 'size':
// //         return res[property] && !res[property].includes('Standard'); // Example condition
// //       case 'disk_backup_enabled':
// //         return res[property] !== 'enabled';
// //       case 'backup_redundancy':
// //         return res[property] !== 'LRS';
// //       case 'public_access_disabled':
// //         return !res[property];
// //       case 'private_endpoints_enabled':
// //         return !res[property];
// //       case 'fileshare_protection_enabled':
// //         return !res[property];
// //       default:
// //         return false;
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>

// //       <div style={styles.dropdownContainer}>
// //         <label htmlFor="type-select" style={styles.label}>
// //           Resource Type:
// //         </label>
// //         <select
// //           id="type-select"
// //           style={styles.select}
// //           onChange={(e) => setSelectedType(e.target.value)}
// //           value={selectedType}
// //         >
// //           {resourceTypes.map((type) => (
// //             <option key={type} value={type}>
// //               {type}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       <div style={styles.cardContainer}>
// //         {displayedResources.map((res, index) => {
// //           const nonCompliantProperties = Object.keys(res).filter((key) =>
// //             checkOptimizeButton(res, key)
// //           );

// //           return (
// //             <div key={index} style={styles.card}>
// //               <h2 style={styles.cardTitle}>{res.name}</h2>
// //               <p>
// //                 <strong>Location:</strong> {res.location || 'N/A'}
// //               </p>

// //               {Object.entries(res).map(([key, value]) => {
// //                 if (
// //                   [
// //                     'name',
// //                     'type',
// //                     'resource_group',
// //                     'location'
// //                   ].includes(key)
// //                 )
// //                   return null;

// //                 return (
// //                   <div key={key} style={{ marginBottom: '0.5rem' }}>
// //                     <p>
// //                       <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
// //                       {typeof value === 'boolean' ? String(value) : value}
// //                     </p>
// //                     {checkOptimizeButton(res, key) && (
// //                       <button
// //                         onClick={() => handleOptimizeProperty(res, key)}
// //                         style={styles.optimizeButton}
// //                       >
// //                         Optimize
// //                       </button>
// //                     )}
// //                   </div>
// //                 );
// //               })}

// //               {nonCompliantProperties.length > 0 && (
// //                 <button
// //                   onClick={() => handleOptimizeResource(res)}
// //                   style={{ ...styles.optimizeButton, marginTop: '2rem' }}
// //                 >
// //                   Optimize Resource
// //                 </button>
// //               )}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     fontFamily: 'Arial, sans-serif',
// //     padding: '2rem',
// //     backgroundColor: '#f2f6ff',
// //     minHeight: '100vh',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     color: '#003366',
// //   },
// //   dropdownContainer: {
// //     margin: '1rem 0',
// //     textAlign: 'center',
// //   },
// //   label: {
// //     marginRight: '1rem',
// //     fontSize: '1rem',
// //   },
// //   select: {
// //     padding: '0.5rem',
// //     fontSize: '1rem',
// //   },
// //   cardContainer: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '1rem',
// //     justifyContent: 'center',
// //   },
// //   card: {
// //     backgroundColor: '#fff',
// //     padding: '1rem',
// //     borderRadius: '0.5rem',
// //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// //     width: '320px',
// //   },
// //   cardTitle: {
// //     marginBottom: '0.5rem',
// //     color: '#003366',
// //   },
// //   optimizeButton: {
// //     backgroundColor: '#008000',
// //     color: 'white',
// //     border: 'none',
// //     padding: '0.5rem 1rem',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //   },
// // };

// // export default App;



// // import React, { useEffect, useState } from 'react';

// // const App = () => {
// //   const [resources, setResources] = useState({});
// //   const [selectedType, setSelectedType] = useState('All');
// //   const [pipelineMessage, setPipelineMessage] = useState('');

// //   useEffect(() => {
// //     // Fetch resources from backend
// //     fetch('http://localhost:5000/api/resources')
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log('Fetched resources:', data); // Log the data to verify it
// //         setResources(data);
// //       })
// //       .catch((err) => console.error('Error fetching resources:', err));
// //   }, []);

// //   const resourceTypes = ['All', ...Object.keys(resources)];
// //   const displayedResources =
// //     selectedType === 'All'
// //       ? Object.values(resources).flat()
// //       : resources[selectedType] || [];

// //   const handleTriggerPipeline = async (pipelineId, data) => {
// //     try {
// //       const response = await fetch(`http://localhost:5000/api/trigger-pipeline/${pipelineId}`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(data),
// //       });
// //       const result = await response.json();
// //       setPipelineMessage(result.message || result.error);
// //     } catch (error) {
// //       console.error('Error triggering pipeline:', error);
// //       setPipelineMessage('Failed to trigger pipeline.');
// //     }
// //   };

// //   const handleOptimizeProperty = async (resource, property) => {
// //     try {
// //       const data = {
// //         type: resource.type,
// //         name: resource.name,
// //         resourceGroup: resource.resource_group,
// //         property: property,
// //       };
// //       // Trigger pipeline task for specific property optimization
// //       await handleTriggerPipeline('optimize-property', data);
// //     } catch (error) {
// //       console.error('Error optimizing property:', error);
// //     }
// //   };

// //   const handleOptimizeResource = async (resource) => {
// //     try {
// //       const data = {
// //         type: resource.type,
// //         name: resource.name,
// //         resourceGroup: resource.resource_group,
// //       };
// //       // Trigger pipeline task for optimizing entire resource
// //       await handleTriggerPipeline('optimize-resource', data);
// //     } catch (error) {
// //       console.error('Error optimizing resource:', error);
// //     }
// //   };

// //   const checkOptimizeButton = (res, property) => {
// //     switch (property) {
// //       case 'tls_version':
// //         return res[property] !== '1.2';
// //       case 'soft_delete':
// //         return res[property] !== 'enabled';
// //       case 'private_endpoint':
// //         return !res[property];
// //       case 'redundancy':
// //         return res[property] !== 'LRS';
// //       case 'shared_key_access':
// //         return res[property] !== 'disabled';
// //       case 'blob_public_access':
// //         return res[property] !== 'disabled';
// //       case 'tier':
// //         return res[property]?.toLowerCase() !== 'cool';
// //       case 'diagnostic_setting':
// //         return !res[property];
// //       case 'fileshare_backup':
// //         return !res[property];
// //       case 'size':
// //         return res[property] && !res[property].includes('Standard'); // Example condition
// //       case 'disk_backup_enabled':
// //         return res[property] !== 'enabled';
// //       case 'backup_redundancy':
// //         return res[property] !== 'LRS';
// //       case 'public_access_disabled':
// //         return !res[property];
// //       case 'private_endpoints_enabled':
// //         return !res[property];
// //       case 'fileshare_protection_enabled':
// //         return !res[property];
// //       default:
// //         return false;
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>

// //       <div style={styles.dropdownContainer}>
// //         <label htmlFor="type-select" style={styles.label}>
// //           Resource Type:
// //         </label>
// //         <select
// //           id="type-select"
// //           style={styles.select}
// //           onChange={(e) => setSelectedType(e.target.value)}
// //           value={selectedType}
// //         >
// //           {resourceTypes.map((type) => (
// //             <option key={type} value={type}>
// //               {type}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       <div style={styles.cardContainer}>
// //         {displayedResources.length === 0 ? (
// //           <p>No resources found for this type.</p>
// //         ) : (
// //           displayedResources.map((res, index) => {
// //             const nonCompliantProperties = Object.keys(res).filter((key) =>
// //               checkOptimizeButton(res, key)
// //             );

// //             return (
// //               <div key={index} style={styles.card}>
// //                 <h2 style={styles.cardTitle}>{res.name}</h2>
// //                 <p>
// //                   <strong>Location:</strong> {res.location || 'N/A'}
// //                 </p>

// //                 {Object.entries(res).map(([key, value]) => {
// //                   if (
// //                     [
// //                       'name',
// //                       'type',
// //                       'resource_group',
// //                       'location'
// //                     ].includes(key)
// //                   )
// //                     return null;

// //                   return (
// //                     <div key={key} style={{ marginBottom: '0.5rem' }}>
// //                       <p>
// //                         <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
// //                         {typeof value === 'boolean' ? String(value) : value}
// //                       </p>
// //                       {checkOptimizeButton(res, key) && (
// //                         <button
// //                           onClick={() => handleOptimizeProperty(res, key)}
// //                           style={styles.optimizeButton}
// //                         >
// //                           Optimize {key.replace(/_/g, ' ')}
// //                         </button>
// //                       )}
// //                     </div>
// //                   );
// //                 })}

// //                 {nonCompliantProperties.length > 0 && (
// //                   <button
// //                     onClick={() => handleOptimizeResource(res)}
// //                     style={{ ...styles.optimizeButton, marginTop: '2rem' }}
// //                   >
// //                     Optimize Resource
// //                   </button>
// //                 )}
// //               </div>
// //             );
// //           })
// //         )}
// //       </div>

// //       {pipelineMessage && (
// //         <p style={styles.pipelineMessage}>{pipelineMessage}</p>
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     fontFamily: 'Arial, sans-serif',
// //     padding: '2rem',
// //     backgroundColor: '#f2f6ff',
// //     minHeight: '100vh',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     color: '#003366',
// //   },
// //   dropdownContainer: {
// //     margin: '1rem 0',
// //     textAlign: 'center',
// //   },
// //   label: {
// //     marginRight: '1rem',
// //     fontSize: '1rem',
// //   },
// //   select: {
// //     padding: '0.5rem',
// //     fontSize: '1rem',
// //   },
// //   cardContainer: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '1rem',
// //     justifyContent: 'center',
// //   },
// //   card: {
// //     backgroundColor: '#fff',
// //     padding: '1rem',
// //     borderRadius: '0.5rem',
// //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// //     width: '320px',
// //   },
// //   cardTitle: {
// //     marginBottom: '0.5rem',
// //     color: '#003366',
// //   },
// //   optimizeButton: {
// //     backgroundColor: '#008000',
// //     color: 'white',
// //     border: 'none',
// //     padding: '0.5rem 1rem',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //   },
// //   pipelineMessage: {
// //     marginTop: '1rem',
// //     color: '#0078D4',
// //   },
// // };

// // export default App;

// // import React, { useEffect, useState } from 'react';

// // const App = () => {
// //   const [resources, setResources] = useState({});
// //   const [selectedType, setSelectedType] = useState('All');
// //   const [pipelineMessage, setPipelineMessage] = useState('');

// //   useEffect(() => {
// //     // Fetch resources from backend
// //     fetch('http://localhost:5000/api/resources')
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log('Fetched resources:', data); // Log the data to verify it
// //         setResources(data);
// //       })
// //       .catch((err) => console.error('Error fetching resources:', err));
// //   }, []);

// //   const resourceTypes = ['All', ...Object.keys(resources)];
// //   const displayedResources =
// //   selectedType === 'All'
// //     ? Object.values(resources).flat()
// //     : Array.isArray(resources[selectedType])
// //       ? resources[selectedType]
// //       : [];


// //       const handleTriggerPipeline = async (resource, optimizeProperty, optimizeAll) => {
// //         const data = {
// //           type: resource.type,
// //           name: resource.name,
// //           resourceGroup: resource.resource_group,
// //           property: optimizeProperty,  // Can be null if optimizing the whole resource
// //           optimizeAll: optimizeAll,    // True if optimizing the entire resource
// //         };
      
// //         try {
// //           const response = await fetch('http://localhost:5000/api/trigger-pipeline', {
// //             method: 'POST',
// //             headers: { 'Content-Type': 'application/json' },
// //             body: JSON.stringify(data),
// //           });
      
// //           const result = await response.json();
// //           console.log(result);
// //         } catch (error) {
// //           console.error('Error triggering pipeline:', error);
// //         }
// //       };
    
// //       const handleOptimizeProperty = async (resource, property) => {
// //         await handleTriggerPipeline(resource, property, false);
// //       };
      
// //       const handleOptimizeResource = async (resource) => {
// //         await handleTriggerPipeline(resource, null, true);
// //       };
      
  
// //   const checkOptimizeButton = (res, property) => {
// //     switch (property) {
// //       case 'tls_version':
// //         return res[property] !== '1.2';
// //       case 'soft_delete':
// //         return res[property] !== 'enabled';
// //       case 'private_endpoint':
// //         return !res[property];
// //       case 'redundancy':
// //         return res[property] !== 'LRS';
// //       case 'shared_key_access':
// //         return res[property] !== 'disabled';
// //       case 'blob_public_access':
// //         return res[property] !== 'disabled';
// //       case 'tier':
// //         return res[property]?.toLowerCase() !== 'cool';
// //       case 'diagnostic_setting':
// //         return !res[property];
// //       case 'fileshare_backup':
// //         return !res[property];
// //       case 'size':
// //         return res[property] && !res[property].includes('Standard'); // Example condition
// //       case 'disk_backup_enabled':
// //         return res[property] !== 'enabled';
// //       case 'backup_redundancy':
// //         return res[property] !== 'LRS';
// //       case 'public_access_disabled':
// //         return !res[property];
// //       case 'private_endpoints_enabled':
// //         return !res[property];
// //       case 'fileshare_protection_enabled':
// //         return !res[property];
// //       default:
// //         return false;
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>

// //       <div style={styles.dropdownContainer}>
// //         <label htmlFor="type-select" style={styles.label}>
// //           Resource Type:
// //         </label>
// //         <select
// //           id="type-select"
// //           style={styles.select}
// //           onChange={(e) => setSelectedType(e.target.value)}
// //           value={selectedType}
// //         >
// //           {resourceTypes.map((type) => (
// //             <option key={type} value={type}>
// //               {type}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       <div style={styles.cardContainer}>
// //         {displayedResources.length === 0 ? (
// //           <p>No resources found for this type.</p>
// //         ) : (
// //           displayedResources.map((res, index) => {
// //             const nonCompliantProperties = Object.keys(res).filter((key) =>
// //               checkOptimizeButton(res, key)
// //             );

// //             return (
// //               <div key={index} style={styles.card}>
// //                 <h2 style={styles.cardTitle}>{res.name}</h2>
// //                 <p>
// //                   <strong>Location:</strong> {res.location || 'N/A'}
// //                 </p>
// //                 console.log("Rendering resource:", res, typeof res);
// //                 {Object.entries(res).map(([key, value]) => {
// //                   if (
// //                     [
// //                       'name',
// //                       'type',
// //                       'resource_group',
// //                       'location'
// //                     ].includes(key)
// //                   )
// //                     return null;

// //                   return (
// //                     <div key={key} style={{ marginBottom: '0.5rem' }}>
// //                       <p>
// //                         <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
// //                         {typeof value === 'boolean' ? String(value) : value}
// //                       </p>
// //                       {checkOptimizeButton(res, key) && (
// //                         <button
// //                           onClick={() => handleOptimizeProperty(res, key)}
// //                           style={styles.optimizeButton}
// //                         >
// //                           Optimize {key.replace(/_/g, ' ')}
// //                         </button>
// //                       )}
// //                     </div>
// //                   );
// //                 })}

// //                 {nonCompliantProperties.length > 0 && (
// //                   <button
// //                     onClick={() => handleOptimizeResource(res)}
// //                     style={{ ...styles.optimizeButton, marginTop: '2rem' }}
// //                   >
// //                     Optimize Resource
// //                   </button>
// //                 )}
// //               </div>
// //             );
// //           })
// //         )}
// //       </div>

// //       {pipelineMessage && (
// //         <p style={styles.pipelineMessage}>{pipelineMessage}</p>
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     fontFamily: 'Arial, sans-serif',
// //     padding: '2rem',
// //     backgroundColor: '#f2f6ff',
// //     minHeight: '100vh',
// //   },
// //   header: {
// //     textAlign: 'center',
// //     color: '#003366',
// //   },
// //   dropdownContainer: {
// //     margin: '1rem 0',
// //     textAlign: 'center',
// //   },
// //   label: {
// //     marginRight: '1rem',
// //     fontSize: '1rem',
// //   },
// //   select: {
// //     padding: '0.5rem',
// //     fontSize: '1rem',
// //   },
// //   cardContainer: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     gap: '1rem',
// //     justifyContent: 'center',
// //   },
// //   card: {
// //     backgroundColor: '#fff',
// //     padding: '1rem',
// //     borderRadius: '0.5rem',
// //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
// //     width: '320px',
// //   },
// //   cardTitle: {
// //     marginBottom: '0.5rem',
// //     color: '#003366',
// //   },
// //   optimizeButton: {
// //     backgroundColor: '#008000',
// //     color: 'white',
// //     border: 'none',
// //     padding: '0.5rem 1rem',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //   },
// //   pipelineMessage: {
// //     marginTop: '1rem',
// //     color: '#0078D4',
// //   },
// // };

// // export default App;


// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [resources, setResources] = useState({});
//   const [selectedType, setSelectedType] = useState('All');
//   const [pipelineMessage, setPipelineMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/resources')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('Fetched resources:', data);
//         setResources(data);
//       })
//       .catch((err) => console.error('Error fetching resources:', err));
//   }, []);

//   const resourceTypes = ['All', ...Object.keys(resources)];
//   const displayedResources =
//     selectedType === 'All'
//       ? Object.values(resources).flat()
//       : Array.isArray(resources[selectedType])
//         ? resources[selectedType]
//         : [];

//   const handleTriggerPipeline = async (resource, optimizeProperty, optimizeAll) => {
//     const data = {
//       type: resource.type,
//       name: resource.name,
//       resourceGroup: resource.resource_group,
//       property: optimizeProperty,
//       optimizeAll: optimizeAll,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/trigger-pipeline', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       console.log(result);
//       setPipelineMessage(result.message || 'Pipeline triggered.');
//     } catch (error) {
//       console.error('Error triggering pipeline:', error);
//       setPipelineMessage('Error triggering pipeline.');
//     }
//   };

//   const handleOptimizeProperty = async (resource, property) => {
//     await handleTriggerPipeline(resource, property, false);
//   };

//   const handleOptimizeResource = async (resource) => {
//     await handleTriggerPipeline(resource, null, true);
//   };

//   const checkOptimizeButton = (res, property) => {
//     switch (property) {
//       case 'tls_version':
//         return res[property] !== '1.2';
//       case 'soft_delete':
//         return res[property] !== 'enabled';
//       case 'private_endpoint':
//         return !res[property];
//       case 'redundancy':
//         return res[property] !== 'LRS';
//       case 'shared_key_access':
//         return res[property] !== 'disabled';
//       case 'blob_public_access':
//         return res[property] !== 'disabled';
//       case 'tier':
//         return res[property]?.toLowerCase() !== 'cool';
//       case 'diagnostic_setting':
//         return !res[property];
//       case 'fileshare_backup':
//         return !res[property];
//       case 'size':
//         return res[property] && !res[property].includes('Standard');
//       case 'disk_backup_enabled':
//         return res[property] !== 'enabled';
//       case 'backup_redundancy':
//         return res[property] !== 'LRS';
//       case 'public_access_disabled':
//         return !res[property];
//       case 'private_endpoints_enabled':
//         return !res[property];
//       case 'fileshare_protection_enabled':
//         return !res[property];
//       default:
//         return false;
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>

//       <div style={styles.dropdownContainer}>
//         <label htmlFor="type-select" style={styles.label}>
//           Resource Type:
//         </label>
//         <select
//           id="type-select"
//           style={styles.select}
//           onChange={(e) => setSelectedType(e.target.value)}
//           value={selectedType}
//         >
//           {resourceTypes.map((type) => (
//             <option key={type} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div style={styles.cardContainer}>
//         {displayedResources.length === 0 ? (
//           <p>No resources found for this type.</p>
//         ) : (
//           displayedResources.map((res, index) => {
//             const nonCompliantProperties = Object.keys(res).filter((key) =>
//               checkOptimizeButton(res, key)
//             );

//             return (
//               <div key={index} style={styles.card}>
//                 <h2 style={styles.cardTitle}>{res.name}</h2>
//                 <p>
//                   <strong>Location:</strong> {res.location || 'N/A'}
//                 </p>
//                 {Object.entries(res).map(([key, value]) => {
//                   if (['name', 'type', 'resource_group', 'location'].includes(key)) return null;

//                   return (
//                     <div key={key} style={{ marginBottom: '0.5rem' }}>
//                       <p>
//                         <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
//                         {typeof value === 'boolean' ? String(value) : value}
//                       </p>
//                       {checkOptimizeButton(res, key) && (
//                         <button
//                           onClick={() => handleOptimizeProperty(res, key)}
//                           style={styles.optimizeButton}
//                         >
//                           Optimize {key.replace(/_/g, ' ')}
//                         </button>
//                       )}
//                     </div>
//                   );
//                 })}

//                 {nonCompliantProperties.length > 0 && (
//                   <button
//                     onClick={() => handleOptimizeResource(res)}
//                     style={{ ...styles.optimizeButton, marginTop: '2rem' }}
//                   >
//                     Optimize Resource
//                   </button>
//                 )}
//               </div>
//             );
//           })
//         )}
//       </div>

//       {pipelineMessage && (
//         <p style={styles.pipelineMessage}>{pipelineMessage}</p>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: 'Arial, sans-serif',
//     padding: '2rem',
//     backgroundColor: '#f2f6ff',
//     minHeight: '100vh',
//   },
//   header: {
//     textAlign: 'center',
//     color: '#003366',
//   },
//   dropdownContainer: {
//     margin: '1rem 0',
//     textAlign: 'center',
//   },
//   label: {
//     marginRight: '1rem',
//     fontSize: '1rem',
//   },
//   select: {
//     padding: '0.5rem',
//     fontSize: '1rem',
//   },
//   cardContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1rem',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '1rem',
//     borderRadius: '0.5rem',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//     width: '320px',
//   },
//   cardTitle: {
//     marginBottom: '0.5rem',
//     color: '#003366',
//   },
//   optimizeButton: {
//     backgroundColor: '#008000',
//     color: 'white',
//     border: 'none',
//     padding: '0.5rem 1rem',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '0.25rem',
//   },
//   pipelineMessage: {
//     marginTop: '1rem',
//     color: '#0078D4',
//     textAlign: 'center',
//   },
// };

// export default App;


import React, { useEffect, useState } from 'react';

const App = () => {
  const [resources, setResources] = useState({});
  const [selectedType, setSelectedType] = useState('All');
  const [pipelineMessage, setPipelineMessage] = useState('');

  useEffect(() => {
    // Fetch resources from backend
    fetch('http://localhost:5000/api/resources')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched resources:', data); // Log the data to verify it
        setResources(data);
      })
      .catch((err) => console.error('Error fetching resources:', err));
  }, []);

  const resourceTypes = ['All', ...Object.keys(resources)];
  const displayedResources =
    selectedType === 'All'
      ? Object.values(resources).flat()
      : Array.isArray(resources[selectedType])
      ? resources[selectedType]
      : [];

      const handleTriggerPipeline = async (resource, optimizeProperty, optimizeAll) => {
        const data = {
          type: resource.type,
          name: resource.name,
          rg_name: resource.resourceGroup,
          property: optimizeProperty,
          optimizeAll: optimizeAll,
        };
      
        try {
          const response = await fetch('http://localhost:5000/api/trigger-pipeline', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          console.log(result);
          setPipelineMessage(`Pipeline triggered for ${data.name}`);
        } catch (error) {
          console.error('Error triggering pipeline:', error);
          setPipelineMessage(`Failed to trigger pipeline for ${data.name}`);
        }
      };
      
      // ✅ Add this
      const handleOptimizeProperty = async (resource, property) => {
        await handleTriggerPipeline(resource, property, false);
      };
      
      const handleOptimizeResource = async (resource) => {
        await handleTriggerPipeline(resource, null, true);
      };
      

  const checkOptimizeButton = (res, property) => {
    switch (property) {
      case 'tls_version':
        return res[property] !== '1.2';
      case 'private_endpoint':
        return !res[property];
      case 'redundancy':
        return res[property] !== 'LRS';
      case 'shared_key_access':
        return res[property] !== 'disabled';
      case 'blob_public_access':
        return res[property] !== 'disabled';
      case 'tier':
        return res[property]?.toLowerCase() !== 'cool';
      case 'fileshare_backup':
        return !res[property];
      case 'size':
        return res[property] && !res[property].includes('Standard');
      case 'disk_backup_enabled':
        return res[property] !== 'enabled';
      case 'backup_redundancy':
        return res[property] !== 'LRS';
      case 'public_access_disabled':
        return !res[property];
      case 'private_endpoints_enabled':
        return !res[property];
      case 'fileshare_protection_enabled':
        return !res[property];
      default:
        return false;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Azure Optimization Monitoring Dashboard</h1>

      <div style={styles.dropdownContainer}>
        <label htmlFor="type-select" style={styles.label}>
          Resource Type:
        </label>
        <select
          id="type-select"
          style={styles.select}
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType}
        >
          {resourceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.cardContainer}>
        {displayedResources.length === 0 ? (
          <p>No resources found for this type.</p>
        ) : (
          displayedResources.map((res, index) => {
            console.log("Rendering resource:", res, typeof res);

            const nonCompliantProperties = Object.keys(res).filter((key) =>
              checkOptimizeButton(res, key)
            );

            return (
              <div key={index} style={styles.card}>
                <h2 style={styles.cardTitle}>{res.name}</h2>
                <p>
                  <strong>Location:</strong> {res.location || 'N/A'}
                </p>
                {Object.entries(res).map(([key, value]) => {
                  if (
                    [
                      'name',
                      'type',
                      'resource_group',
                      'location'
                    ].includes(key)
                  )
                    return null;

                  return (
                    <div key={key} style={{ marginBottom: '0.5rem' }}>
                      <p>
                        <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
                        {typeof value === 'boolean' ? String(value) : value}
                      </p>
                      {checkOptimizeButton(res, key) && (
                        <button
                          onClick={() => handleOptimizeProperty(res, key)}
                          style={styles.optimizeButton}
                        >
                          Optimize {key.replace(/_/g, ' ')}
                        </button>
                      )}
                    </div>
                  );
                })}

                {nonCompliantProperties.length > 0 && (
                  <button
                    onClick={() => handleOptimizeResource(res)}
                    style={{ ...styles.optimizeButton, marginTop: '2rem' }}
                  >
                    Optimize Resource
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>

      {pipelineMessage && (
        <p style={styles.pipelineMessage}>{pipelineMessage}</p>
      )}
    </div>
  );
};
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#f2f6ff',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    color: '#003366',
  },
  dropdownContainer: {
    margin: '1rem 0',
    textAlign: 'center',
  },
  label: {
    marginRight: '1rem',
    fontSize: '1rem',
  },
  select: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: '320px',
  },
  cardTitle: {
    marginBottom: '0.5rem',
    color: '#003366',
  },
  optimizeButton: {
    backgroundColor: '#008000',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  pipelineMessage: {
    marginTop: '1rem',
    color: '#0078D4',
  },
};

export default App;
