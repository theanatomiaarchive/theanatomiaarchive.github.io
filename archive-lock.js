/* ================================================================
   MASTER ARCHIVE LOCK (PROTOCOL OMEGA)
   ================================================================
   To seal the entire Archive: Change 'false' to 'true' below.
*/
const isArchiveSealed = false; 

if (isArchiveSealed) {
    window.onload = function() {
        const omegaBanner = `
            <div style="margin-top: 80px; border-top: 2px solid #1a1a17; padding-top: 30px; border-bottom: 2px solid #1a1a17; padding-bottom: 30px; background: rgba(10, 10, 9, 0.8); margin-bottom: 40px;">
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: #444; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px;">
                    System Status: Archive Locked // Global Decommission Active
                </div>
                <h4 style="font-family: 'Playfair Display', serif; color: #ff3333; font-style: italic; margin: 0 0 10px 0; font-size: 1.2rem;">
                    Notice to Field Correspondents:
                </h4>
                <p style="font-size: 0.9rem; color: #888; line-height: 1.6; margin: 0; font-family: 'IM Fell English', serif;">
                    The External Submission Portal is now <strong>DECOMMISSIONED</strong>. Due to an indefinite lapse in Custodian vetting, no further field reports can be committed to the permanent record.
                </p>
                <p style="font-size: 0.8rem; color: #555; margin-top: 15px; font-style: italic; font-family: 'IM Fell English', serif;">
                    This Ledger is now a Closed Specimen History. Information preserved for historical reference only.
                </p>
                <div style="margin-top: 20px; font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; color: #222; text-align: center; letter-spacing: 4px;">
                    DIGITAL SARCOPHAGUS PROTOCOL: SEALED
                </div>
            </div>`;
        
        const footer = document.querySelector('footer');
        if (footer) {
            footer.insertAdjacentHTML('beforebegin', omegaBanner);
        }
    };
}

