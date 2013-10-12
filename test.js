require('level-packager/test')(
    require('tape'), require('./')
  , {
        skipErrorIfExistsTest : true
      , skipRepairTest        : true
      , skipDestroyTest       : true
      , nonPersistent         : true
    }
)