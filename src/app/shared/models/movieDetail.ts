export interface Movie {
        id: number;
        title: string;
        overview: string;
        tagline: string;
        budget: number;
        revenue: number;
        imdbUrl: string;
        tmdbUrl: string;
        posterUrl: string;
        backdropUrl: string;
        originalLanguage: string;
        releaseDate: Date;
        runTime: number;
        price: number;
        createdDate: Date;
        updatedDate?: any;
        updatedBy?: any;
        cReatedBy?: any;
        rating: number;
    }

    export interface Cast {
        id: number;
        name: string;
        profilePath: string;
        character: string;
    }

    export interface Genre {
        id: number;
        name: string;
    }

    export interface MovieDetail {
        movie: Movie;
        casts: Cast[];
        genres: Genre[];
    }