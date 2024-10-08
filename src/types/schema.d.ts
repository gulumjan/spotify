import { Interface } from "readline";

interface IUser {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  product: string;
  type: string;
  uri: string;
}

interface iTracks {
  tracks: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      album: {
        album_type: string;
        total_tracks: number;
        available_markets: Array<string>;
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        images: Array<{
          url: string;
          height: number;
          width: number;
        }>;
        name: string;
        release_date: string;
        release_date_precision: string;
        restrictions: {
          reason: string;
        };
        type: string;
        uri: string;
        artists: Array<{
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          type: string;
          uri: string;
        }>;
      };
      artists: Array<{
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
      available_markets: Array<string>;
      disc_number: number;
      duration_ms: number;
      explicit: boolean;
      external_ids: {
        isrc: string;
        ean: string;
        upc: string;
      };
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      is_playable: boolean;
      linked_from: {};
      restrictions: {
        reason: string;
      };
      name: string;
      popularity: number;
      preview_url: string;
      track_number: number;
      type: string;
      uri: string;
      is_local: boolean;
    }>;
  };
  artists: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string;
        total: number;
      };
      genres: Array<string>;
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      name: string;
      popularity: number;
      type: string;
      uri: string;
    }>;
  };
  albums: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      album_type: string;
      total_tracks: number;
      available_markets: Array<string>;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      name: string;
      release_date: string;
      release_date_precision: string;
      restrictions: {
        reason: string;
      };
      type: string;
      uri: string;
      artists: Array<{
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
    }>;
  };
  playlists: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      collaborative: boolean;
      description: string;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      name: string;
      owner: {
        external_urls: {
          spotify: string;
        };
        followers: {
          href: string;
          total: number;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
        display_name: string;
      };
      public: boolean;
      snapshot_id: string;
      tracks: {
        href: string;
        total: number;
      };
      type: string;
      uri: string;
    }>;
  };
  shows: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      available_markets: Array<string>;
      copyrights: Array<{
        text: string;
        type: string;
      }>;
      description: string;
      html_description: string;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      is_externally_hosted: boolean;
      languages: Array<string>;
      media_type: string;
      name: string;
      publisher: string;
      type: string;
      uri: string;
      total_episodes: number;
    }>;
  };
  episodes: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      audio_preview_url: string;
      description: string;
      html_description: string;
      duration_ms: number;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      is_externally_hosted: boolean;
      is_playable: boolean;
      language: string;
      languages: Array<string>;
      name: string;
      release_date: string;
      release_date_precision: string;
      resume_point: {
        fully_played: boolean;
        resume_position_ms: number;
      };
      type: string;
      uri: string;
      restrictions: {
        reason: string;
      };
    }>;
  };
  audiobooks: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      authors: Array<{
        name: string;
      }>;
      available_markets: Array<string>;
      copyrights: Array<{
        text: string;
        type: string;
      }>;
      description: string;
      html_description: string;
      edition: string;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      languages: Array<string>;
      media_type: string;
      name: string;
      narrators: Array<{
        name: string;
      }>;
      publisher: string;
      type: string;
      uri: string;
      total_chapters: number;
    }>;
  };
}

interface iMePlaylist {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Array<{
    collaborative: boolean;
    description: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    name: string;
    owner: {
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string;
        total: number;
      };
      href: string;
      id: string;
      type: string;
      uri: string;
      display_name: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      total: number;
    };
    type: string;
    uri: string;
  }>;
}

interface IPlaylistById {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  name: string;
  owner: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
  };
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      added_at: string;
      added_by: {
        external_urls: {
          spotify: string;
        };
        followers: {
          href: string;
          total: number;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      is_local: boolean;
      track: {
        album: {
          album_type: string;
          total_tracks: number;
          available_markets: Array<string>;
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          images: Array<{
            url: string;
            height: number;
            width: number;
          }>;
          name: string;
          release_date: string;
          release_date_precision: string;
          restrictions: {
            reason: string;
          };
          type: string;
          uri: string;
          artists: Array<{
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }>;
        };
        artists: Array<{
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          type: string;
          uri: string;
        }>;
        available_markets: Array<string>;
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_ids: {
          isrc: string;
          ean: string;
          upc: string;
        };
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        is_playable: boolean;
        linked_from: {};
        restrictions: {
          reason: string;
        };
        name: string;
        popularity: number;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
        is_local: boolean;
      };
    }>;
  };
  type: string;
  uri: string;
}

interface IRecentlyPlayedTracks {
  href: string;
  limit: number;
  next: string;
  cursors: {
    after: string;
    before: string;
  };
  total: number;
  items: Array<{
    track: {
      album: {
        album_type: string;
        total_tracks: number;
        available_markets: Array<string>;
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        images: Array<{
          url: string;
          height: number;
          width: number;
        }>;
        name: string;
        release_date: string;
        release_date_precision: string;
        restrictions: {
          reason: string;
        };
        type: string;
        uri: string;
        artists: Array<{
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          type: string;
          uri: string;
        }>;
      };
      artists: Array<{
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
      available_markets: Array<string>;
      disc_number: number;
      duration_ms: number;
      explicit: boolean;
      external_ids: {
        isrc: string;
        ean: string;
        upc: string;
      };
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      is_playable: boolean;
      linked_from: {};
      restrictions: {
        reason: string;
      };
      name: string;
      popularity: number;
      preview_url: string;
      track_number: number;
      type: string;
      uri: string;
      is_local: boolean;
    };
    played_at: string;
    context: {
      type: string;
      href: string;
      external_urls: {
        spotify: string;
      };
      uri: string;
    };
  }>;
}
interface IUserTopTracks {
  items: Array<{
    id: string;
    name: string;
    artists: Array<{
      id: string;
      name: string;
    }>;
    duration_ms: number;
    album: {
      id: string;
      name: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
    };
    popularity: number;
    external_urls: {
      spotify: string;
    };
    uri: string;
  }>;
}

interface IPopularArtists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Array<{
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    genres: Array<string>;
    href: string;
    id: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }>;
}

interface iCategories {
  categories: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      href: string;
      icons: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      id: string;
      name: string;
    }>;
  };
}
interface ISeveralAlbums {
  albums: Array<{
    album_type: string;
    total_tracks: number;
    available_markets: Array<string>;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
      reason: string;
    };
    type: string;
    uri: string;
    artists: Array<{
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }>;
    tracks: {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: Array<{
        artists: Array<{
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          type: string;
          uri: string;
        }>;
        available_markets: Array<string>;
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        is_playable: boolean;
        linked_from: {
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          type: string;
          uri: string;
        };
        restrictions: {
          reason: string;
        };
        name: string;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
        is_local: boolean;
      }>;
    };
    copyrights: Array<{
      text: string;
      type: string;
    }>;
    external_ids: {
      isrc: string;
      ean: string;
      upc: string;
    };
    genres: Array<string>;
    label: string;
    popularity: number;
  }>;
}
interface IRecommendations {
  seeds: Array<{
    afterFilteringSize: number;
    afterRelinkingSize: number;
    href: string;
    id: string;
    initialPoolSize: number;
    type: string;
  }>;
  tracks: Array<{
    album: {
      album_type: string;
      total_tracks: number;
      available_markets: Array<string>;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      name: string;
      release_date: string;
      release_date_precision: string;
      restrictions: {
        reason: string;
      };
      type: string;
      uri: string;
      artists: Array<{
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
    };
    artists: Array<{
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }>;
    available_markets: Array<string>;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
      ean: string;
      upc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: {};
    restrictions: {
      reason: string;
    };
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
  }>;
}
interface IFeatureBrowser {
  message: string;
  playlists: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      collaborative: boolean;
      description: string;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      name: string;
      owner: {
        external_urls: {
          spotify: string;
        };
        followers: {
          href: string;
          total: number;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
        display_name: string;
      };
      public: boolean;
      snapshot_id: string;
      tracks: {
        href: string;
        total: number;
      };
      type: string;
      uri: string;
    }>;
  };
}

interface IAlbums {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Array<{
    added_at: string;
    album: {
      album_type: string;
      total_tracks: number;
      available_markets: Array<string>;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
      name: string;
      release_date: string;
      release_date_precision: string;
      restrictions: {
        reason: string;
      };
      type: string;
      uri: string;
      artists: Array<{
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
      tracks: {
        href: string;
        limit: number;
        next: string;
        offset: number;
        previous: string;
        total: number;
        items: Array<{
          artists: Array<{
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }>;
          available_markets: Array<string>;
          disc_number: number;
          duration_ms: number;
          explicit: boolean;
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          is_playable: boolean;
          linked_from: {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            type: string;
            uri: string;
          };
          restrictions: {
            reason: string;
          };
          name: string;
          preview_url: string;
          track_number: number;
          type: string;
          uri: string;
          is_local: boolean;
        }>;
      };
      copyrights: Array<{
        text: string;
        type: string;
      }>;
      external_ids: {
        isrc: string;
        ean: string;
        upc: string;
      };
      genres: Array<string>;
      label: string;
      popularity: number;
    };
  }>;
}
interface IChange {
  name: string;
  public: true;
  collaborative: false;
  description: string;
}
