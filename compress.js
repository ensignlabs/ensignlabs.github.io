function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);
    
  }
    
  /* Include Many js files */
  include('https://ensignlabs.github.io/Style/sp.login.module/js/sp.login.module.js');
  include('https://ensignlabs.github.io/Style/MultiPeoplePicker/js/nf.proposals.form.js');
  include('https://ensignlabs.github.io/Style/jQuery/jquery.min.js');
  include('https://ensignlabs.github.io/Style/jQuery/jquery-ui.js');
  include('https://ensignlabs.github.io/Style/Bootstrap/js/bootstrap.min.js');
  include('https://ensignlabs.github.io/Style/Moment/moment-with-locales.js');
  include('https://ensignlabs.github.io/Style/MultiPeoplePicker/js/nf.peoplepicker.sortable.js');
  include('https://ensignlabs.github.io/Style/MultiListLookup/js/jquery.dataTables.js');
  include('https://ensignlabs.github.io/Style/MultiListLookup/js/lookup.multilist.datatable.js');
  include('https://ensignlabs.github.io/Style/MultiListLookup/js/tagify.js');
  include('https://ensignlabs.github.io/Style/MultiListLookup/js/tagify.polyfills.js');